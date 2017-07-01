/**
 * Created by 银鹏 on 2017/5/23.
 */
var menu=document.getElementById("menu");
var ems=menu.getElementsByTagName("em");
for(var i=0;i<ems.length;i++){
    public.addClass(ems[i],"cursor");
    public.addClass(public.next(ems[i]),"cursor");
}
menu.onclick=function(e){
    e=e|| window.event;
    e.target= e.target|| e.srcElement;
    if(e.target.nodeName==="EM"){
        menuPlay(public.next(e.target));
    }if(e.target.nodeName==="SPAN"){
        menuPlay(e.target);
    }
};
function menuPlay(ele){
    var oUl=public.next(ele);
    var flag=null;
    if(oUl){
        flag=public.css(oUl,"display");
        if(flag=="none"){
            public.css(oUl,{display:"block"});
            public.addClass(public.prev(ele),"open");
            flag="block";
        }else{
            public.css(oUl,{display:"none"});
            public.removeClass(public.prev(ele),"open");
            flag="none";
            var oUls=oUl.getElementsByTagName("ul");
            for(var i=0;i<oUls.length;i++){
                public.css(oUls[i],{display:"none"});
                var em=public.prev(public.prev(oUls[i]));
                public.removeClass(em,"open");
            }
        }
    }
}