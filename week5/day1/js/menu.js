//事件委托 给最高级id="menu"绑定事件  必须是冒泡阶段发生
var menu=document.getElementById("menu");
var ems=menu.getElementsByTagName("em");
//1给所有的em和前面有em的span加上小手效果
for(var i=0;i<ems.length;i++){
    public.addClass(ems[i],"cursor");
    public.addClass(public.next(ems[i]),"cursor");

}
//给menu绑定事件
menu.onclick=function(e){
    e=e||window.event;
    e.target= e.target|| e.srcElement;
    //为了方便,不管你点击的是em还是span,都执行同一个方法,那么我们就规定你传进来的是span
    if(e.target.nodeName==="SPAN"){
        menuPlay(e.target);
    }
    if(e.target.nodeName=="EM"){
        //你点击的是em 就让他的兄弟span传进来
        menuPlay(public.next(e.target));
    }
};

function menuPlay(ele){
    //ele span
    //让你点击的那个span下面的兄弟ul展开还是折起来
    var oUl=public.next(ele);
    //定义一个变量记录当前是折起来还是展开
    var flag=null;
    if(oUl){
       flag=public.css(oUl,"display");
        if(flag==="none"){
            //让ul展开
            public.css(oUl,{display:"block"});
            //让前面的em变成减号"open"
            public.addClass(public.prev(ele),"open");
            //再把标识换成 "block"
            flag="block";
        }else{
            //让ul折起来
            public.css(oUl,{display:"none"});
            //让前面的em变成加好"close"
            public.removeClass(public.prev(ele),"open");
            //再把标识换成 "none"
            flag="none";
            //一旦ul折起来之后让它里面得ul全都折起来
            var oUls=oUl.getElementsByTagName("ul");
            //循环所有的ul
            for(var i=0;i<oUls.length;i++){
                //将每个ul折起来
                public.css(oUls[i],{display:"none"});
                //获取当前ul的哥哥span的哥哥em,将他的符号变成加号
                var em=public.prev(public.prev(oUls[i]));
                public.removeClass(em,"open");
            }
        }
    }
}