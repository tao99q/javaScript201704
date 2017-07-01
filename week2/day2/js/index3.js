/**
 * Created by acer on 2017/5/3.
 */

//1.获取数据 ajax
var xhr=new XMLHttpRequest();
var resultData=null;
xhr.open("GET","json/product.json",false);
xhr.onreadystatechange=function () {
    if(xhr.readyState===4&&xhr.status===200){
        resultData=xhr.responseText;
    }
};
xhr.send(null);
//把数据变为JSON对象
resultData=public.toJsonObj(resultData);

//2绑定数据，ＥＳ６模板字符串
var htmlStr=``;
for(var i=0;i<resultData.length;i++){
    htmlStr+=`<li data-time="${resultData[i].time}" data-price="${resultData[i].price}" data-hot="${resultData[i].hot}">
<a href="javascript:;">
<img src="${resultData[i].img}" alt="">
<p>${resultData[i].title}</p>
<p class="hot">热度：${resultData[i].hot}</p>
<del>1000</del>
<span>￥：${resultData[i].price}</span>
<p class="time">上架时间：${resultData[i].time}</p>
</a>
</li>`;
}
var oList=document.getElementById("list");
oList.innerHTML=htmlStr;

//3给三个排序标签绑定事件
var header=document.getElementById("header");
var linkList=header.getElementsByTagName("a");
for( var j=0;j<linkList.length;j++){
    linkList[j].setAttribute("data-flag",-1);
    linkList[j].setAttribute("data-index",j)
    linkList[j].onclick=function () {
        //this 你点击的那个元素
        productSort.call(this);
        changeArrow.call(this);
        clearOther.call(this);
    }
}
function productSort() {
    var _this=this;//that=this
    var oLis=public.toArray(oList.getElementsByTagName("li"));
    var dataFlag=this.getAttribute("data-flag");
    dataFlag*=-1;
    this.setAttribute("data-flag",dataFlag);
    oLis.sort(function (a,b) {
        //1.得到点击的那个元素中属性"sort-attr"代表的值（"data-time","data-price","data-hot"）
        var sortAttr=_this.getAttribute("sort-attr");
        //2.获取前一项和后一项对应属性的值
        var cur=a.getAttribute(sortAttr);
        var nex=b.getAttribute(sortAttr);
        cur=cur.replace(/-/g,"");
        nex=nex.replace(/-/g,'');
        //3.比较。return
        return (cur-nex)*dataFlag;
    });
    var frg=document.createDocumentFragment();
    for (var i=0;i<oLis.length;i++){
        frg.appendChild(oLis[i])
    }
    oList.appendChild(frg);
    frg=null;
}
//实现箭头的切换
function changeArrow() {
    //this-就是你点击的元素
    var arrows=this.getElementsByTagName("i");
    var arrowUp=arrows[0];
    var arrowDown=arrows[1];
    var dataFlag=this.getAttribute("data-flag");
    if(dataFlag>0){
        arrowUp.className="up bg";
        arrowDown.className="down";
        return;
    }
    arrowDown.className="down bg";
    arrowUp.className="up";
}
//清除其他A标签中的样式（排序的初始状态，被选中i的样式）
function clearOther() {
    for (var i=0;i<linkList.length;i++){
        if(this===linkList[i])continue;
        //不是选中的A，变成排序data-flag的初始状态
        linkList[i].setAttribute("data-flag",-1);
        //箭头的样式清除
        var arrows=linkList[i].getElementsByTagName("i");
        arrows[0].className="up";
        arrows[1].className="down"
    }
}
