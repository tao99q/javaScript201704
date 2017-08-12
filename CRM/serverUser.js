/**
 * Created by Administrator on 2017/6/25.
 */
let http=require("http"),
    url=require("url"),
    fs=require("fs");
http.createServer((request,response)=>{
    let {pathname,query}=url.parse(request.url,true),
        regPath=/\.([0-9a-zA-Z]+)$/i;
    /*资源文件的请求*/
    if(regPath.test(pathname)){
        let path=regPath.exec(pathname)[1].toUpperCase(),
            pathMIME="text/plain";
        switch (path){
            case "HTML":
                pathMIME="text/html";
                break;
            case "CSS":
                pathMIME="text/css";
                break;
            case "JS":
                pathMIME="text/javascript";
                break
        }
        let  readFile="NOT FOUND",status=404;
        try {
            readFile=fs.readFileSync("."+pathname,"utf-8");
            status=200;
        }catch (e){};
        response.writeHead(status,{"content-type":pathMIME+";charset=utf-8;"});
        response.end(readFile);
        return;
    };
    /*API请求数据*/
    //把数据读取出来,并转为JSON对象
    let allData=JSON.parse(fs.readFileSync("./json/userList.json","utf-8"));
    var result={
        code:1,
        msg:"error"
    };
    if(pathname=="/getUserList"){
        //获取客户端请求是传的参数page
       var page=query["page"];
        result={
            code:0,
            msg:"success",
            total:Math.ceil(allData.length/10),
            data:[]
        };
       // (page-1)*10 ~ page*10-1
       for (var i=(page-1)*10;i<page*10;i++) {
           //注意最后一页的时候有可能不足10条数据
           if(i>allData.length-1)break;
           result.data.push(allData[i]);
       }
       response.writeHead(200,{"content-type":"application/json;charset=utf-8;"});
       response.end(JSON.stringify(result));
       return;
    };
    if(pathname=="/removeUser"){
        //获取客户端传给服务器的要删除的用户的ID
        var userId=query["id"];
        //遍历数据库中的数据userData,找到对应的这个ID的用户,删掉这条数据
        allData.forEach(function (item,index) {
            if(item["id"]==userId){
                console.log(userId);
                allData.splice(index,1);
                //把改变的数据写入到数据库中,注意把userData变成JSON字符串
                fs.writeFileSync("./json/userList.json",JSON.stringify(allData),"utf-8");
                result={
                    code:0,
                    msg:"success"
                };
                return false;
            }
        });
        response.writeHead(200,{
            "content-type":"application/json;charset=utf-8;"
        });
        response.end(JSON.stringify(result));
        return;
    };
    if(pathname=="/addUser"){
        //这里用的是post请求,前端请求的参数不在req.url上,那这里有他自己得到方式 req.on("data",function(){})
        var strData="";
        request.on("data",function (chunk) {
            strData+=chunk;
        });
        request.on("end",function () {
            strData=format(strData);//{name:XXX}
            strData["id"]=(allData[allData.length-1]["id"])+1;
            allData.push(strData);
            fs.writeFileSync("./json/userList.json",JSON.stringify(allData),"utf-8");
            result={
                code:0,
                msg:"success"
            };
            response.writeHead(200,{
                "content-type":"application/json;charset=utf-8;"
            });
            response.end(JSON.stringify(result));
        });
        return;
    }
    if(pathname=='/userInfo'){
        var userId=query["id"];
        allData.forEach(function (item,index) {
            if(item["id"]==userId){
                result={
                    code:0,
                    msg:"success",
                    data:item
                };
                return false;
            }
        });
        response.writeHead(200,{
            "content-type":"application/json;charset=utf-8;"
        });
        response.end(JSON.stringify(result));
        return;
    }
    if(pathname=="/changeUserInfo"){
        var strData="";
        request.on("data",function (chunk) {
            strData+=chunk;
        });
        request.on("end",function () {
            strData=format(strData);
            userId=strData.id;
            allData.forEach(function (item,index) {
                if(item["id"]==userId){
                    allData.splice(index,1,strData);
                    //把改变的数据写入到数据库中,注意把userData变成JSON字符串
                    fs.writeFileSync("./json/userList.json",JSON.stringify(allData),"utf-8");
                    result={
                        code:0,
                        msg:"success"
                    };
                    return false;
                }
            });
            response.writeHead(200,{
                "content-type":"application/json;charset=utf-8;"
            });
            response.end(JSON.stringify(result));
        });
        return;
    }
}).listen(12345,()=>{
    console.log("12345 listing OK")
});
function format(str) {
    var reg=/([^&]+)=([^&]+)/g,
        obj={};
    str.replace(reg,function () {
        obj[arguments[1]]=decodeURIComponent(arguments[2]);
    });
    return obj;
}