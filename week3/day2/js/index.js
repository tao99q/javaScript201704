/**
 * Created by 银鹏 on 2017/5/10.
 */
//1.
var news=document.getElementById("news");
var imgList=document.getElementsByTagName("img");

//2.获取数据
var xhr=new XMLHttpRequest();
xhr.open("GET","js/data.txt?_="+Math.random(),false);
//为了防止请求的时候出现缓存问题
//xhr.open("GET","data.txt?_="+(new Date()).getTime(),false);
xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&xhr.status===200){
        window.data=public.toJsonObj(xhr.responseText);
    }
};
xhr.send(null);

//3.绑定数据

if(window.data&&window.data.length){
    var str=``;
    for(var i=0;i<data.length;i++){
        str+=`<li>
        <div><img src="" photo="${data[i].src}" alt=""/></div>
        <div>
        <h2>${data[i].title}</h2>
        <p>${data[i].desc}</p>
        </div>
        </li>`
    }
    news.innerHTML=str;
}

//4图片延迟加载

function imgDelayLoad(){
    for(var i=0;i<imgList.length;i++){
        var H=public.win("clientHeight")+public.win("scrollTop");
        var h=imgList[i].parentNode.offsetHeight+public.offset(imgList[i].parentNode).top;
        if(H>h){
            imgLoad(imgList[i]);
            fadeIn(imgList[i])
        }
    }
}
function imgLoad(img){
    var curImg=document.createElement("img");
    curImg.src=img.getAttribute("photo");
    curImg.onload=function(){
        img.src=this.src;
    };
    curImg=null;
}
imgDelayLoad();
//触发滚动事件的时候还需要加载
window.onscroll=imgDelayLoad;
function fadeIn(ele){
    ele.timer=window.setInterval(function(){
        var opacityVal=public.getCss(ele,"opacity");
        if(opacityVal>=1){
            window.clearInterval(ele.timer);
            return;
        }
        opacityVal+=0.01;
        public.setCss(ele,"opacity",opacityVal)
    },30)
}