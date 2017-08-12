/**
 * Created by Administrator on 2017/6/25.
 */
//单利模式
var pageRender=(function () {
    //获取需要的变量
    var box=document.getElementById("box"),
        list=document.getElementById("list"),
        pageBtn=document.getElementById("page"),
        pageNum=document.getElementById("pageNum"),
        pageInput=document.getElementById("pageInput");
    var total=0;//总页数
    var page=1;//当前页

    //bindHTML :从服务器上获取指定页面的数据内容,并且绑定到页面上
    function bindHTML() {
        function fn(result) {
            //如果没有请求到数据直接return
            if(!result)return;
            //获取总页数
            total=parseInt(result["total"]);
            var data=result["data"];

            //绑定list数据
            var str=``;
            for (var i=0;i<data.length;i++){
                str+=`<li data-id="${data[i]["id"]}">
                <span>${data[i]["id"]}</span>
                <span>${data[i]["name"]}</span>
                <span>${data[i]["sex"]==1?"女":"男"}</span>
                <span>${data[i]["score"]}</span>
                <span>
                <button class="del">删除 </button>
                <button class="check">查看/修改</button>
                </span>
                </li>`
            }
            list.innerHTML=str;
            str=``;
            for (var j=1;j<=total;j++){
                if(j==page){
                    str+=  `<li class="bg">${j}</li>`;
                    continue;
                }
                str+=`<li>${j}</li>`
            }
            pageNum.innerHTML=str;
            //输入框中的内容变成当前页
            pageInput.value=page;
        }
        $.ajax({
            url:"/getUserList?page="+page,
            type:"get",
            dataType:"json",
            success:fn
        })
    };

    //bindEvent 使用事件委托处理点击事件
    function bindEvent(e) {
        e=e||window.event;
        var target=e.target||e.srcElement,
            tarTag=target.tagName.toUpperCase(),//事件源的标签名
            tarInn=target.innerHTML;
        //计算每个span的page值
        if(tarTag=="SPAN"){
            if(tarInn==="首页"){
                if(page===1)return;
                page=1;
            }
            if(tarInn==="上一页"){
                if(page===1)return;
                page--;
            }
            if(tarInn==="下一页"){
                if(page===total) return;
                page++;
            }
            if(tarInn==="尾页"){
                if(page===total) return;
                page=total;
            }
            //只要page改动了就要再一次请求 执行bindHTML
            bindHTML();
        }
        //pageNum 中的li
        if(tarTag=="LI"){
            //如果你点击的是当前展示的这一页,就return
            if(page==parseInt(tarInn)) return;
            page=parseInt(tarInn);
            bindHTML();
        }
    }
    return{
        init:function () {
            //开始加载页面的时候就请求一次,做一次数据绑定,展示第一页的数据内容
            bindHTML();
            //处理page的点击事件 采用事件委托的方式处理
            pageBtn.onclick=bindEvent;
            //文本框#pageInput的输入事件
            pageInput.onkeyup=function (e) {
                e=e||window.event;
                if(e.keyCode===13){
                    var val=Math.round(this.value);
                    //输入的不是有效数字,就让他显示当前页
                    if(isNaN(val)){
                        this.value=page;
                        return;
                    }
                    //输入的值小于最小值或者大于最大值了
                    val<1?val=1:null;
                    val>total?val=total:null;
                    page=val;
                    bindHTML();
                }
            };
            //绑定删除事件
            $("#list").on("click",".del",function () {
                let userId=$(this.parentNode.parentNode).attr("data-id"),
                    flag=confirm(`确定要删除ID为[ ${userId} ]的信息吗?`),
                    _this=this;
                if(flag){
                    $.ajax({
                        url:"/removeUser",
                        type:"get",
                        dataType:"json",
                        data:{
                            id:userId
                        },
                        async:true,
                        success:function (result) {
                            if(result&&result.code==0){
                                alert("亲,你把我删了,就再也回不来了");
                                $("#list")[0].removeChild(_this.parentNode.parentNode)
                            }else {
                                alert("哈哈,你删不了我的!")
                            }
                        },
                        error:function (e) {
                            console.log(e)
                        }
                    })
                }
            });
            //增加新用户
            $("#submit").click(function () {
                $.ajax({
                    url:"/addUser",
                    type:"post",
                    dataType:"json",
                    async:false,
                    data:{
                        name:$("#name").val(),
                        sex:$("#sex").val(),
                        score:$("#score").val(),
                    },
                    cache:false,
                    success:function (result) {
                        console.log(result);
                        if (result&&result.code===0){
                            alert("亲!你增加了一个用户信息哦!");
                            bindHTML();
                            console.log($("form")[0].reset());
                        }else {
                            alert("哎!增加失败了哦!")
                        }
                    },
                    error:function (e) {
                        console.log(e)
                    }
                })
            });
            //查看和修改用户信息
            console.log($(".check"));
            $("#list").on("click",".check",function () {
                console.log(1);
                let userId=$(this.parentNode.parentNode).attr("data-id");
                window.open('../userInfo.html?id='+userId)

            })
        }
    }
})();
pageRender.init();