/**
 * Created by acer on 2017/5/3.
 */
//先通过ajax获取数据  json文件夹中的product.json文件
//AJAX,async(异步)，JavaScript，and XML，专门负责获取数据和后台交互用的

/*步骤
* 1.创建一个异步对象var xhr= new XMLHttpRequest()
* 2.打开一个URL地址，xhr.open(请求方式:"get"/"post","url：请求文件的路径"，true？false：是否异步)
* 3.绑定onreadystatechange事件成功返回并携带数据
* 满足xhr.readyState===4&&xhr.status===200,说明成功
* 4.xhr.send(null)发送给后台，向后台传数据的
* */
//1获取数据
//1
var xhr=new XMLHttpRequest();
var resultData=null;
//2 "GET",大小写都行
xhr.open("GET","json/product.json",false);
//3.
xhr.onreadystatechange=function () {
    if(xhr.readyState===4&&xhr.status===200){
        resultData=xhr.responseText;
    }
};
//4.
xhr.send(null);

//把JSON字符串变成JSON对象
resultData=public.toJsonObj(resultData);
console.log(resultData);
//3.动态绑定数据（ES6模板字符串）
var htmlStr=``;
for (var i=0;i<resultData.length;i++){
    //标准的自定义属性 data-time=time
    htmlStr+=`<li data-time="${resultData[i].time}" data-price="${resultData[i].price}" data-hot="${resultData[i].hot}">
<a href="javascript:;">
<img src="${resultData[i].img}" alt="">
<p>${resultData[i].title}</p>
<p class="hot">热度：${resultData[i].hot}</p>
<del>1000</del>
<span>￥：${resultData[i].price}</span>
<p class="time">上架时间：${resultData[i].time}</p>
</a>
</li>`
}

var oList=document.getElementById("list");
oList.innerHTML=htmlStr;

//给三个不同的维度绑定上事件
 var header=document.getElementById("header");
 var linkList=header.getElementsByTagName("a");
 for(var j=0;j<linkList.length;j++){
     //我们给每一个linkList 加一个自定义属性来表示当前升序还是降序
     linkList[j].setAttribute("data-flag",-1);
     linkList[j].setAttribute("data-index",j);
     linkList[j].onclick=function () {
         //实现排序 this ->你点击的那个linkList
         //我们还要根据点的不同的标签，来判断根据什么来排序
         productSort.call(this);
     }
 }
 //定义一个排序的方法
 function productSort() {
     //先把所有li获取出来，转为数组，然后进行排序
     var oLis=public.toArray(oList.getElementsByTagName("li"));
     var _this=this;//_this就是你点击的那个元素
     var dataFlag=this.getAttribute("data-flag");
     dataFlag*=-1;
     this.setAttribute("data-flag",dataFlag);
     oLis.sort(function (a,b) {
         //this->window
         //我们最好是知道你点的那个元素的索引，索引是0就按照时间排序，索引是1按照价格排序，索引是2按照热度排序
         var dataIndex=_this.getAttribute("data-index");
         if(dataIndex==="0"){
             //按照时间排序
             var curTime=new Date(a.getAttribute("data-time"));
             var nexTime=new Date(b.getAttribute("data-time"));
             return (curTime-nexTime)*dataFlag;
         }
         else if(dataIndex==="1"){
             //按照价格排序
             var curPrice=a.getAttribute("data-price");
             var nexPrice=b.getAttribute("data-price");
             return (curPrice-nexPrice)*dataFlag;
         }
         else if(dataIndex==="2"){
             //按照热度排序
             var curHot=a.getAttribute("data-hot");
             var nexHot=b.getAttribute("data-hot");
             return (curHot-nexHot)*dataFlag;
         }

     });
     //排好序了之后，把最新的顺序放到页面上
     var frg=document.createDocumentFragment();
     for (var i=0;i<oLis.length;i++){
         frg.appendChild(oLis[i])
     }
     oList.appendChild(frg);
     frg=null;
 }

