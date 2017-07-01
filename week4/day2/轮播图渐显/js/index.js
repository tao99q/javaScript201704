/**
 * Created by ���� on 2017/5/17.
 */
var banner=document.getElementById("banner");
var bannerInner=banner.getElementsByClassName("bannerInner")[0];
var focusList=banner.getElementsByClassName("focusList")[0];
var leftBtn=public.children(banner,"a")[0];
var rightBtn=public.children(banner,"a")[1];
var imgList=bannerInner.getElementsByTagName("img");
var list=focusList.getElementsByTagName("li");

//��ȡ���� ajax
function getData(){
    var xhr=new XMLHttpRequest();
    xhr.open("get","data.txt?_="+Math.random(),false);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&xhr.status===200){
            window.data=public.toJsonObj(xhr.responseText);
        }
    };
    xhr.send(null)
};

//������
function bindData(){
    if(window.data){
        var str1=``,str2=``;
        for(var i=0;i<data.length;i++){
            //�ֲ�����
            str1+=`<div><img src="" photo="${data[i].src}"  alt=""/></div>`;
            //��������
            str2+=i===0?`<li class="selected"></li>`:`<li></li>`;
        }
        bannerInner.innerHTML=str1;
        focusList.innerHTML=str2;
    }
}


//ͼƬ���ӳټ���
function imgDelay(){
    for(var i=0;i<imgList.length;i++){
        var curImg=document.createElement("img");
        curImg.src=imgList[i].getAttribute("photo");
        curImg.i=i;
        curImg.onload=function(){
            imgList[this.i].src=this.src;
            if(this.i==0){
                //��ΪͼƬ�Ƿ���div����������Ҫ�ı���Ǹ���Ԫ��div�Ĳ㼶��ϵ��͸����
                public .css(imgList[0].parentNode,"zIndex",1);
                animation(imgList[0].parentNode,{opacity:1},1000)
            }
        }
    }
};


//�Զ�����
var step=0;//��¼����
var timer=null;

function move(){
    step++;
    if(step==data.length){
        step=0;
    }
    //ѭ�����е�ͼƬ,�ж�ͼƬ�������Ƿ����step,��step ����ͼƬ,�Ȱ����Ĳ㼶��ϵ��Ϊ1Ȼ����ȥ������͸���Ȳ������ӵ�1,
    setImg();
}
function setImg(){
    //ͼƬ���л�
    for(var i=0;i<imgList.length;i++){
        if(i==step){
            public .css(imgList[i].parentNode,{zIndex:1});
            animation(imgList[i].parentNode,{opacity:1},1000,function(){
               //��ȡ��ǰԪ�ص������ֵ� �õ�һ������,ѭ�����������е��ֵ�͸���ȶ����0
                var sib=public .siblings(this);
                for(var i=0;i<sib.length;i++){
                    public .css(sib[i],{opacity:0})
                }
                isOkClick=true;
            })
        }else{
            public .css(imgList[i].parentNode,{zIndex:0})
        }
    }
    //�ý���ͬ��
    for(var i=0;i<list.length;i++){
        list[i].className=i==step?"selected":"";
    }
};

//��껬���¼�
function mouseEvent(){
    banner.onmouseover=function(){
        //ֹͣ�л� �����ʱ��
        window.clearInterval(timer);
        public .css(leftBtn,"display","block");
        public .css(rightBtn,"display","block");
    };
    banner.onmouseout=function(){
        timer=window.setInterval(move,3000);
        public .css(leftBtn,"display","none");
        public .css(rightBtn,"display","none");
    };
}

//�����л�
var isOkClick=true;
function btnClick(){
    rightBtn.onclick=function(){
        if(isOkClick){
            isOkClick=false;
            move()
        }
    };
    leftBtn.onclick=function(){
        if(isOkClick){
            isOkClick=false;
            if(step==0){
                step=data.length;
            }
            step--;
            setImg();
        }
    };
}

//����󶨵���¼�
function focusClick(){
    for(var i=0;i<list.length;i++){
        list[i].i=i;
        list[i].onclick=function(){
           if(isOkClick){
               isOkClick=false;
               step=this.i;
               setImg()
           }
        }
    }
}


getData();
bindData();
imgDelay();
timer=window.setInterval(move,3000);
mouseEvent();
btnClick();
focusClick();


