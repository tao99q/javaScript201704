/**
 * Created by 银鹏 on 2017/5/25.
 */
function on(ele,type,callback,bool){
    bool=bool||false;
    if(ele.addEventListener){
        ele.addEventListener(type,callback,bool);
    }else{
        if(!ele["event"+type]){
            ele["event"+type]=[];
            //这个run只要绑定一次就够了,其他的直接往小数组中放就可以了,只有这句代码会执行一次,所以把绑定的过程放这里面
            ele.attachEvent("on"+type,function(){
                var e=window.event;
                run.call(ele,e)
            });
        }
        var events=ele["event"+type];
        if(events&&events.length){
            for(var i=0;i<events.length;i++){
                if(events[i]==callback){
                    return;
                }
            }
        }
        events.push(callback);

    }
}

function off(ele,type,callback,bool){
    bool=bool||false;
    if(ele.removeEventListener){
        ele.removeEventListener(type,callback,bool)
    }else{
        var events=ele["event"+type];
        if(events&&events.length){
            for(var i=0;i<events.length;i++){
                if(events[i]==callback){
                    ele.detachEvent("on"+type,callback);
                    events.splice(i,1);
                    break;
                }
            }
        }
    }
}

function run(e){
    //事件对象一些属性的不兼容问题
    e.target= e.srcElement;
    e.preventDefault=function(){
        e.returnValue=false;
    };
    e.stopPropagation=function(){
        e.cancelBubble=true;
    };
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+ e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY;
    var events=this["event"+ e.type];
    if(events&&events.length){
        for(var i=0;i<events.length;i++){
            events[i].call(this,e)
        }
    }
}