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
        productSort.call(this)
    }
}
function productSort() {
    var _this=this;//that=this
    var oLis=public.toArray(oList.getElementsByTagName("li"));
    var dataFlag=this.getAttribute("data-flag");
    dataFlag*=-1;
    this.setAttribute("data-flag",dataFlag);
    oLis.sort(function (a,b) {
        //得到索引，_this就那个点击的元素
        var dataIndex=_this.getAttribute("data-index");
        if(dataIndex==="0"){
            var curTime=a.getAttribute("data-time");
            var nexTime=b.getAttribute("data-time");
            curTime=curTime.replace(/-/g,"");
            nexTime=nexTime.replace(/-/g,"");
            //如果2个字符串减法运算会默认转为数字
            return (curTime-nexTime)*dataFlag;
        }else if(dataIndex==="1"){
            var curPrice=a.getAttribute("data-price");
            var nexPrice=b.getAttribute("data-price");
            return (curPrice-nexPrice)*dataFlag
        }else  if(dataIndex==="2"){
            var curHot=a.getAttribute("data-hot");
            var nexHot=b.getAttribute("data-hot");
            return (curHot-nexHot)*dataFlag
        }
    });
    var frg=document.createDocumentFragment();
    for (var i=0;i<oLis.length;i++){
        frg.appendChild(oLis[i])
    }
    oList.appendChild(frg);
    frg=null;
}
