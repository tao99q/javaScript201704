/**
 * Created by 银鹏 on 2017/5/11.
 */
var public=(function(){
    //1. toArray 康莉利
    function toArray(likeArray){
        var ary=[];
        try{
            return ary.slice.call(likeArray);
        }catch(e){
            for(var i=0;i<likeArray.length;i++){
                ary.push(likeArray[i]);
            }
            return ary;
        }
    }

    //2. toJsonObj李睿
    function toJsonObj(jsonstr){
        try{
            return JSON.parse(jsonstr)
        }
        catch(e){
            return eval("("+jsonstr+")")
        }
    }

    //3. getRandom段斌
    function getRandom(n,m){
        n=Number(n);
        m=Number(m);
        if(isNaN(n)||isNaN(m)){
            return Math.random()
        }
        if(n>m){
            n=n+m;
            m=n-m;
            n=n-m;
        }
        return Math.round(Math.random()*(m-n)+n);
    }

    //4. win 闫文强
    function win(attr,val){
        if(typeof val=="undefined"){
            return document.documentElement[attr]||document.body[attr]
        }else{
            document.documentElement[attr]=val;
            document.body[attr]=val;
        }
    }
    //5. offset伍明俊
    function offset(curEle){
        var l= curEle.offsetLeft;
        var t = curEle.offsetTop;
        var p = curEle.offsetParent;
        while (p){
            if (window.navigator.userAgent.indexof('MSIE 8')== -1){
                l += p.clientLeft;
                t += p.clientHeight;

            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent
        }
        return {left:l,top:t}
    }
    //6. getCss 宁会远
    function getCss(ele,attr){
        var val=null;
        if("getComputedStyle" in window){
            val=window.getComputedStyle(ele)[attr]
        }else{
            if(attr=="opacity"){
                val=ele.currentStyle["filter"];
                var reg=/^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                if(reg.test(val)){
                    val=RegExp.$1;
                }
            }else{
                val=ele.currentStyle[attr]
            }
        }
        var reg1=/^-?\d+(?:\.\d+)?(px|pp|pt|rem|em|deg)?$/;
        if(reg1.test(attr)){
            val=parseFloat(val)
        }
        return val
    }
    //7. setCss李文鑫
    function setCss(ele,attr,val){
        if(attr=="opacity"){
            ele.style.opacity=val;
            ele.style.filter="alpha(opacity"+val+")";
        }
        if(attr=="float"){
            ele.style.cssFloat=val;
            ele.style.styleFloat=val;
        }
        var reg=/^(width|height|left|right|top|bottom|(margin|padding)(Top|Left|Right|Bottom)?)$/;
        if(reg.test(attr)&&!isNaN(val)){
            val+="px"
        }
        ele.style[attr]=val;
    }


    //8. getGroupCss李凯
    function getGroupCss(ele,obj){
        obj=obj||[];
        if(obj.toString()=="[object Object]"){
            for(var key in obj){
                if(obj.hasOwnProperty(key)){
                    this.setCss(ele,key,obj[key])
                }
            }
        }
    }

    //9 css 根据参数的不同选择不同的方法
    function css(){
        if(arguments.length===3){
            //setCss(arguments[0],arguments[1],arguments[2])
            //css 中this=public,setCss中的this=public
            setCss.apply(this,arguments);
            return;
        }
        if(arguments.length===2){
            if(arguments[1].toString()=="[object Object]"){
                setGroupCss.apply(this,arguments);
                return;
            }else{
                return getCss.apply(this,arguments);
            }
        }
    }

    //获取当前元素指定标签名的孩子元素节点
    function children(curEle,tagName){
        var kids=curEle.childNodes;
        //所有的孩子节点
        var kidsAry=[];
        for(var i=0;i<kids.length;i++){
            if(kids[i].nodeType===1){
                if(typeof tagName!=="undefined"){
                    if(kids[i].nodeName==tagName.toUpperCase()){
                        kidsAry.push(kids[i]);
                        //continue;
                    }
                }else{
                    kidsAry.push(kids[i]);
                }
            }
        }
        return kidsAry
    }





})();
