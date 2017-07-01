/**
 * Created by ���� on 2017/5/9.
 */
var public=(
    function(){
        //1.��������תΪ����
        function toArray(likeArray){
            var ary=[];
            try{
                return ary.slice.call(likeArray)
            }catch(e){
                for(var i=0;i<likeArray.length;i++){
                    ary.push(likeArray[i])
                }
                return ary;
            }
        };
        //2.��JSON�ַ���תΪJSON����
        function toJsonObj(jsonstr){
            try{
                return JSON.parse(jsonstr)
            }catch(e){
                return eval("("+jsonstr+")")
            }
        }
        //3.��ǰԪ�ؾ���body��ƫ����
        function offset(curEle){
            var L=curEle.offsetLeft;
            var T=curEle.offsetTop;
            var P=curEle.offsetParent;
            while(P){
                if(window.navigator.userAgent.indexOf("MSIE 8")==-1){
                    L+= P.clientLeft;
                    T+= P.clientTop;
                }
                L+= P.offsetLeft;
                T+= P.offsetTop;
                P= P.offsetParent;
            }
            return {left:L, top:T}
        }
        //4.��ȡ�������õ�ǰ������ĺ���ģ������
        function win(attr,value){
            if(typeof value=="undefined"){
                return document.documentElement[attr]||document.body[attr];
            }else{
                document.documentElement[attr]=value;
                document.body[attr]=value;
            }
        }
        //5.��ȡ������ķ���
        function getRandom(n,m){
            n=Number(n);
            m=Number(m);
            if(isNaN(n)||isNaN(m)){
                return Math.random();
            }
            if(n>m){
                //n=n+m;
                //m=n-m;
                //n=n-m;
                var c=n;
                n=m;
                m=c;
                c=null;
            }
            return Math.round(Math.random()*(m-n)+n);
        }
        return{
            toArray:toArray,
            toJsonObj:toJsonObj,
            offset:offset,
            win:win,
            getRandom:getRandom
        }
    }
)();