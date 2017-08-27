const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname,'public/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'My App',
          filename: 'src/index.js'
        })
      ],
    module: {
        loaders: [{test: /\.css$/,loaders: ['style-loader','css-loader']},
                  {test: /\.less$/,loaders: ['style-loader','css-loader','less-loader']},
                  {test: /\.scss$/,loaders: ['style-loader','css-loader','scss-loader']},
                  {test: /\.js$/,loaders: ['babel-loader']}
        ]
    }
}