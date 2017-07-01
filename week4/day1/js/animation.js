/**
 * Created by 银鹏 on 2017/5/16.
 */
/*
(function(){
    function animation(){

    }
    window.animation=animation;
})();
*/

window.animation=(function(){
    function animation(ele,target,druation,sport,callBack){
        target=target||[];
        duration=druation||1000;
        sport=sport||0;
        if(typeof callBack!=="function"){
            callBack=function(){};
        };
        var begin={},time= 0,effectAry=[];
        if(target.toString()==="[object Object]"){
            for(var key in target){
                if(target.hasOwnProperty(key)){
                    begin[key]=public.css(ele,key);
                }
            }
        };
        function linear(b,t,d,s){
            return b + (t-b)/d * s;
        };
        effectAry.push(linear);
        window.clearInterval(ele.timer);
        ele.timer=window.setInterval(function(){
            if(time+13>=druation){
                window.clearInterval(ele.timer);
                for(var key in target){
                    public.css(ele,key,target[key])
                }
                callBack.call(ele);
                return;
            }
            time+=13;
            for(var key in target){
                public.css(ele,key,effectAry[0](begin[key],target[key],druation,time))
            }
        },13)
    };
    return animation;
})();