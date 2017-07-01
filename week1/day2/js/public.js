/**
 * Created by acer on 2017/4/27.
 */
var public={
    //toArray:将传进来的类数组转为数组
    toArray:function (likeArray) {
        var ary=[];
        for (var i=0;i<likeArray.length;i++){
            ary.push(likeArray[i])
        };
        return ary;
    },
    toStr:function (s) {}
};
var public=(
    function () {
        var ary=[];
        function toArray (likeArray) {
            ary=[];
            for (var i=0;i<likeArray.length;i++){
                ary.push(likeArray[i])
            }
            return ary;
        };
        function toStr() {
            console.log(arguments);
            return this.toArray(arguments)
        };
        return {
            toArray:toArray,
            toStr:toStr
        }
    }
)();

console.log(public.toStr(1, 2, 3, 4));;