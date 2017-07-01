/**
 * Created by 银鹏 on 2017/5/6.
 */
//单例模式 封装2个常用方法,toArray(),toJsonObj()
var public=(function(){
    function toArray(likeArray){
        try{
            return Array.prototype.slice.call(likeArray);
        }catch(e){
            var ary=[];
            for(var i=0;i<likeArray.length;i++){
                ary.push(likeArray[i])
            }
            return ary;
        }
    };
    function toJsonObj(jsonStr){
        try{
            return JSON.parse(jsonStr);
        }catch(e){
            return eval("("+jsonStr+")");
        }
    };
    return {
        toArray:toArray,
        toJsonObj:toJsonObj
    }
})();