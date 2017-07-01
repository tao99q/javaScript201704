/**
 * Created by acer on 2017/5/3.
 */
/*
* 【通过AJAX获取数据】
* 1.创建一个ajax对象 var xhr=new XMLHttpRequest()
* 2.打开一个URL地址并请求，xhr.open("GET","数据的地址(都是后台给你的)",是否异步true/false)
* 3.绑定事件xhr.onreadystatechange=function(){
*      if(xhr.readyState===4&&xhr.status===200){
*           xhr.responseText(这里面存的是后台返回给你的数据，一般都是JSON字符串，你要转为JSON对象来使用)
*      }
* }
*4.xhr.send(这里面写的是你传给后台的数据，没有就写null)
*
* 【绑定数据】
* 1.普通的字符串拼接，是个程序员必须都要会的
* 2.动态创建的方式，注意回流问题，先放到文档碎片中，最后添加到页面上
* 3.模板引擎：ES6模板字符串（很好用，逼格也还可以的）。。。。
* 我们以后就选择ES6模板字符串
* 注意webStorm配置一下识别ES6，``,变量：${变量}
*
* 【给每一个A绑定事件】
* 1.给每一个元素增加了两个自定义属性
*   data-flag（代表当前升序还是降序） data-index(当前的索引 笨方法：通过当前索引来判断是按照什么排序) 更好的方法是给每一个a加属性 sort-attr="对应的li 排序依据的那个属性"->"data-time","data-price","data-hot"
*2.注意，我们把事件中绑定的方法写在外面了，我们最好用call来改变一下this，这样用起来比较方便
  * productSort.call(this);
  * changeArrow.call(this);
  * clearOther.call(this);
  *
* 【排序方法productSort】
* 1.我们每一次切换都给原来的排序的标识乘以-1，在把这个值付给他的data-flag属性 。           存储当前点击的那个元素_this=this
* 2.将Li变成数组利用sort进行排序。
*    注意1.return (cur-nex)*dataFlag
*       2.时间的时候把字符串中的‘-’替换掉。我们使用的是正则（g），这样就可以一次性都替换掉
*       3.这里的this是window，我们想用当前点击的那个元素可以在上面用_this代替
*3.将排好序的数组依次放到一个文档碎片中 （只会回流一次）
*4.将文档碎片appendChild我们的ul中
*5.清空文档碎片
*
* 【箭头切换changeArrow】
* 1.this就是当前点击的元素，把选中的元素的两个i获取出来arrows
* 2.获取当前元素是升序还是降序，就是data-flag的值
*    data-flag>0->arrows[0].className="up bg"
*    data-flag<0->arrows[1].className="down bg"
*
* 【恢复默认设置clearOther】
* 1.获取所有的a标签，判断是不是当前被点击的那个（this），是的话，不管（continue），否则初始化状态（data-flag=-1），再把i的选中样式清除
*
* */