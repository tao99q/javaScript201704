/**
 * Created by acer on 2017/5/3.
 */
//public公用的方法
var public=(function () {
    function toArray(likeArray) {
        var ary=[],i;
        try {
            return [].slice.call(likeArray)
        }catch (e){
            for(i=0;i<likeArray.length;i++){
                ary.push(likeArray[i])
            }
            return ary
        }
    }
    function toJsonObj(jsonStr) {
        return "JSON" in window?JSON.parse(jsonStr):eval("("+jsonStr+")");
    }
    return {
        toArray:toArray,
        toJsonObj:toJsonObj
    }
})();