/**
 * Created by Administrator on 2017/6/28.
 */
let http=require("http"),
    url=require("url"),
    fs=require("fs");
http.createServer((req,res)=>{
    let {pathname,query}=url.parse(req.url,true),
        regPath=/\.([0-9a-zA-Z]+)$/i;
    if(regPath.test(pathname)){
        //请求的是资源文件
        let path=regPath.exec(pathname)[1].toUpperCase(),
            pathMIME="text/html";
        path=="JS"?pathMIME="text/javascript":path=="CSS"?pathMIME="text/css":null;
        let readFile=null,
            status=200;
        try {
            readFile=fs.readFileSync("."+pathname,"utf-8");
        }catch (e){
            readFile="NOT FOUND";
            status=404
        }
        res.writeHead(status,{"content-type":pathMIME+";charset=utf-8;"});
        res.end(readFile);
        return;
    };
    let dataAll=fs.readFileSync("./json/data.json","utf-8");
    if(pathname=="/getData"){
        res.writeHead(200,{"content-type":"application/json;charset=utf-8;"});
        res.end(dataAll);
        return;
    }
    if(pathname=="/postData"){
        let str='',result=[];
        dataAll=JSON.parse(dataAll);
        req.on("data",(chunk)=>{str+=chunk;});
        req.on("end",()=>{
            str=JSON.parse(str);
            str.num>=dataAll.length?str.num=dataAll.length:null;
            for(let i=0;i<str.num;i++){
                result.push(dataAll[i]);
            }
            res.writeHead(200,{"content-type":"application/json;charset=utf-8;"});
            res.end(JSON.stringify(result));
        });
    }
}).listen(8080,()=>{
    console.log("8080 OK!")
})
