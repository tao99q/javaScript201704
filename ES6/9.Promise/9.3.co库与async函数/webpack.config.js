/**
 * Created by Weil on 16/5/10.
 */
var webpack = require('webpack');
var path = require('path');

module.exports={
  entry: {
    //'co': [
    //  'webpack-dev-server/client?http://localhost:9090',//资源服务器地址
    //  'webpack/hot/dev-server',
    //  'babel-polyfill',
    //  './src/co.js'
    //],
    'async': [
      'webpack-dev-server/client?http://localhost:9090',//资源服务器地址
      'webpack/hot/dev-server',
      'babel-polyfill',
      './src/async.js'
    ],
    //'p': [
    //  'webpack-dev-server/client?http://localhost:9090',//资源服务器地址
    //  'webpack/hot/dev-server',
    //  'babel-polyfill',
    //  './src/p.js'
    //],
  },
  output: {
    publicPath: "/dev_static/", // dev server使用
    path: './dist/', // 本地文件目录
    filename: '[name].js' //
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: [
          'babel-loader'
        ],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

// plugins: ['transform-runtime']