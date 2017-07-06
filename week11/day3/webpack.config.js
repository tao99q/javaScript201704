var path=require("path");
//处理html的插件
var htmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
    entry:'./src/js/main.js',//入口的js文件
    output: {
        path:path.resolve('./dist'),
        filename: "bundle.js"
    },//出口
    module: {
        loaders:[
            {test:/\.js$/,loader:"babel-loader",exclude:/node_modules/},
            //将css样式解析到style标签上
            {test:/\.css$/,loader:"style-loader!css-loader"},
            //解析vue组件
            {test:/\.vue$/,loader:"vue-loader"}
        ]
    },//模块
    plugins: [new htmlWebpackPlugin({
        template:'./src/index.html'
    })],//插件
};
