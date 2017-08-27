const webpack = require('webpack'); //引入webpack
const path = require('path'); //引入path

module.exports = {
    entry: './src/index', //入口文件
    output: {
        path: path.join(__dirname,'public/dist'), //输出文件夹
        filename: 'bundle.js' //输出文件的名字,把打包后的文件存储在这里
    },
    module: {
        loaders: [{test: /\.css$/,loaders: ['style-loader','css-loader']}, //加载css
                  {test: /\.less$/,loaders: ['style-loader','css-loader','less-loader']}, //加载less
                  {test: /\.scss$/,loaders: ['style-loader','css-loader','scss-loader']}, //加载scss文件
                  {test: /\.js$/,loaders: ['babel-loader']},//加载babel的js文件
                  {test: /\.png/,loaders: ['file-loader']}
        ]
    }
}