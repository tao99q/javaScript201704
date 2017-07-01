/**
 * Created by 银鹏 on 2017/5/13.
 */
var oDivs = document.getElementsByTagName("div");
var floor = document.getElementsByClassName("floor")[0];
var oLis = floor.getElementsByTagName("li");
var timer = null;
//循环所有的div给每个div一个400-600的随机高度,和随机颜色,
//把每个div上偏移量,存到对应的Li上的自定属性(_h)上
for (var i = 0; i < oDivs.length; i++) {
    oDivs[i].style.height = Math.round(Math.random() * (600 - 400) + 400) + "px";
    //"rgb("+m+","+m+","+m+")";
    oDivs[i].style.backgroundColor = "rgb(" + Math.round(Math.random() * (255)) + "," + Math.round(Math.random() * (255)) + "," + Math.round(Math.random() * (255)) + ")";
    oLis[i].setAttribute("_h", offset(oDivs[i]).top);
    oLis[9].setAttribute("_h", 0);
    oLis[i].onclick = function () {
        window.onscroll=null;
        select(this);
        window.clearInterval(timer);
        //this,当前点击的li
        // win("scrollTop",this.getAttribute("_h"));
        //当前的scrollTop值跟当前点击的Li中存储的那个偏移量比较
        //如果大的话让scrollTop值减小,反之增加
        //实现不断在增加和减小用到定时器
        //注意:到达临界值清掉定时器
        var _H = win("scrollTop");
        var _h = this.getAttribute("_h");
        if (_H > _h) {
            timer = window.setInterval(function () {
                if (win("scrollTop") <= _h) {
                    window.clearInterval(timer);
                    window.onscroll=onFloor;
                    return;
                }
                win("scrollTop", _H -= 10);
            }, 1)
        } else {
            timer = window.setInterval(function () {
                if (win("scrollTop") >= _h) {
                    window.clearInterval(timer);
                    window.onscroll=onFloor;
                    return;
                }
                win("scrollTop", _H += 10);
            }, 1)
        }
    };
    oLis[9].onclick = function () {
        window.onscroll=null;
        window.clearInterval(timer);
        select(this);
        var _H = win("scrollTop");
        timer = window.setInterval(function () {
            if (win("scrollTop") <= 0) {
                window.clearInterval(timer);
                window.onscroll=onFloor;
                return;
            }
            win("scrollTop", _H -= 10);
        }, 1)
    }
}
//让指定的li有选中样式
function select(ele) {
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = "";
    }
    ele.className = "select";
}

function win(attr, value) {
    if (arguments.length === 1) {
        return document.documentElement[attr] || document.body[attr];
    } else {
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }
}
function offset(curEle) {
    //先求一次当前元素的偏移量和父级参照物
    var l = curEle.offsetLeft;
    var t = curEle.offsetTop;
    var p = curEle.offsetParent;
    while (p) {
        //在IE8浏览器中,偏移量包含了父级 参照物的边框
        if (window.navigator.userAgent.indexOf("MSIE 8") === -1) {
            l += p.clientLeft;
            t += p.clientTop;
        }
        l += p.offsetLeft;
        t += p.offsetTop;
        p = p.offsetParent;
    }
    return {
        left: l,
        top: t
    }
}

window.onscroll = onFloor;
//当前div漏出超过屏幕一半了,到下一个div超过屏幕一半这之间属于当前div的范围
//当前div的offsetTop-屏幕高的一半到下一个div的offsetTop-屏幕高的一半
function onFloor() {
    var _H = win("scrollTop");
    var _wH=Math.floor(win("clientHeight")/2);
    for (var i = 0; i < oLis.length - 1; i++) {
        var _preTop=oLis[i].getAttribute("_h");
        var _nexTop=oLis[i+1].getAttribute("_h");
        if(_H>=_preTop-_wH&&_H<=_nexTop-_wH){
            select(oLis[i]);
        }
        if(_H>oLis[8].getAttribute("_h")-_wH){
            select(oLis[8]);
        }
    }
};

//0<_H<1,1<_H<2,.........7<H<8,另加8<H
