/**
 * Created by ���� on 2017/5/17.
 */
//��ȡJS����Ҫ�õĵ�Ԫ��
var banner=document.getElementById("banner");
var bannerInner=banner.getElementsByClassName("bannerInner")[0];
var focusList=banner.getElementsByClassName("focusList")[0];
var leftBtn=public.children(banner,"a")[0];
var rightBtn=public.children(banner,"a")[1];
//ͨ��DOM�ṩ�ķ�����ȡ������Ԫ��,���ܽ������ʲô��,����ҳ�����һһ��Ӧ�Ĺ�ϵ,��ͽ�DOMӳ��
var imgList=bannerInner.getElementsByTagName("img");
var list=focusList.getElementsByTagName("li");
var isOkClick=true;
//1.ͨ��AJAX��ȡ����
var xhr=new XMLHttpRequest();
xhr.open("get","data.txt?_="+Math.random(),false);
xhr.onreadystatechange=function(){
    //this==xhr
    if(xhr.readyState===4&&xhr.status===200){
       window.data=public.toJsonObj(xhr.responseText) ;
    }
};
xhr.send(null);

//2.������ es6ģ���ַ���
;(function(){
   if(window.data){
       var str1=``,str2=``;
       for(var i=0;i<data.length;i++){
           str1+=`<div><img src="" photo="${data[i].src}" alt=""/></div>`;
           //Ĭ���ǵ�һ��������ѡ����ʽ
           str2+=i===0?`<li class="selected"></li>`:`<li></li>`;
       }
       //Ϊ��ʵ���޷����Ҫ�����ƴ��һ����һ��ͼƬ
       str1+=`<div><img src="" photo="${data[0].src}" alt=""/></div>`;
       //bannerInner�ֲ���������ж���Ǹ�������������,�м������ݿ�Ⱦ��ǿ�������(banner�Ŀ��)���Լ�
       public .css(bannerInner,"width",(data.length+1)*800);
       bannerInner.innerHTML=str1;
       focusList.innerHTML=str2;
   }
})();

//3.ͼƬ���ӳټ���
;(function(){
    for(var i=0;i<imgList.length;i++){
        var curImg=document.createElement("img");
        curImg.src=imgList[i].getAttribute("photo");
        curImg.i=i;
        curImg.onload=function(){
            //this==curImg
            imgList[this.i].src=this.src;
            animation(imgList[this.i],{opacity:1},2000)
        }
    }
})();

//4.�Զ��ֲ�
var step=0;//��ǰ�ڼ���ͼƬ
var timer=null;
timer=window.setInterval(autoMove,2000);
function autoMove(){
    //�ٽ�ֵ�ж�
    if(step==data.length){
        step=0;
        public.css(bannerInner,{left:-step*800})
    }
    step++;
    animation(bannerInner,{left:-step*800},1000,function(){
        isOkClick=true;
    });
    //animation�еĶ���ʱ�����ҪС���ֲ���ʱ��
    focusSelect();

}
//5ʵ�ֽ���ĸ���ѡ����ʽ
function focusSelect(){
    //������һ�Ž������һ��ͼƬ��Ӧ��Liû��ѡ����ʽ������
    //step=step===list.length?0:step;
    //ѭ�����е�Li �жϵ�ǰli�������Ƿ���ڵ�ǰ�ֲ���ͼƬ,Ҳ����step��ֵ
    for(var i=0;i<list.length;i++){
        //step=step==list.length?0:step;
        if(step==4){
            list[0].className="selected";
        }
        list[i].className=i==step?"selected":"";
    }
}
//6.��껬��ֹͣ�ֲ�
banner.onmouseover= function () {
    //�ص���ʱ��
    window.clearInterval(timer);
    //��ʾ���Ұ�ť
    public .css(leftBtn,"display","block");
    public .css(rightBtn,"display","block");
};
//7.����ƿ���ʼ�ֲ�
banner.onmouseout=function(){
    //�ϱ��Զ��ֲ���ôд�������ôд
    timer=window.setInterval(autoMove,2000);
    public .css(leftBtn,"display","none");
    public .css(rightBtn,"display","none");
};
//8�����Ұ�ť�󶨵���¼�
//Ϊ�˷�ֹ�����ּ����ϵص��,��ǰ�Ķ�����ûִ�����Ҫִ����һ��,��ɶ������ۻ����Խ��Խ��,�����������˻��ڶ�
//Ĭ�Ͽ�ʼʱ�����Ч����,�ڶ���ִ�����֮ǰ������û��Ч����

rightBtn.onclick=function(){
    if(isOkClick){
        isOkClick=false;
        autoMove();
    }
};
leftBtn.onclick=function(){
    if(isOkClick){
        isOkClick=false;
        //�ٽ�ֵ�ж�
        if(step===0){
            step=data.length;
            public .css(bannerInner,{left:-step*800});
        }
        step--;
        animation(bannerInner,{left:-step*800},1000,function(){
            isOkClick=true;
        });
        focusSelect();
    }
};

//9.��������¼�
(function(){
    for(var i=0;i<list.length;i++){
        //�Զ������԰�����i������
        list[i].i=i;
        list[i].onclick=function(){
            step=this.i;
            animation(bannerInner,{left:-step*800},1000);
            focusSelect();
        }
    }
})();
