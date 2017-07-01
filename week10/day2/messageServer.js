/**
 * Created by Administrator on 2017/6/28.
 */
//第三方模块:express
//第三方模块:body-parser
//npm install express body-parser
var express=require("express"),
    bodyParser=require("body-parser"),
    fs=require("fs");
var app=express();//就相当于创建一个服务
//处理资源文件请求
app.use(express.static(__dirname));
//处理json数据请求
app.use(bodyParser.json());
//监听一个端口
app.listen(1234,()=>{
    console.log("1234 OK!")
});
//如果你请求的是根目录 也就是地址是http://localhost:1234/
app.get("/",(request,response)=>{
    response.sendFile("./messageBoard.html",{root:__dirname});
});
//post /messageList
//创建一个数组来存放发送过来的留言的对象{title:"",content:""}
var messageAry=JSON.parse(fs.readFileSync("./json/messageData.json","utf-8"));
app.post("/messageList",(request,response)=>{
    //request.body就是客户端传进来的参数 直接就是个对象
    if(request.body.title||request.body.content){
        messageAry.push(request.body);
    };
    fs.writeFileSync("./json/messageData.json",JSON.stringify(messageAry));
    response.send(fs.readFileSync("./json/messageData.json","utf-8"))
});