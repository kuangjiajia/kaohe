//整个用的是后端的express框架，所以自带安装了一些解析要用的东西
const express = require('express'); //express模块
const path = require('path');//path模块
const favicon = require('serve-favicon');//处理favicon
const logger = require('morgan'); //Morgan模块
const cookieParser = require('cookie-parser'); //cookiee模块
const bodyParser = require('body-parser');//body-parser模块
const app = express(); 
const mysql = require('mysql');//mysql模块 用来连接数据库
//创建连接
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mysql'
});
//建立连接
connection.connect(function() {
  console.log('success');
})
//设置ejs模版
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//解析前端传过来的数据 暂时用不上
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//当进入127.0.0.1:3000时候访问index.ejs模版
app.get('/',(req,res) => {
    res.render('index');
    res.end();
})

//数据接口，用于给前端后台数据
app.get('/dt',(req,res) => {
  //获取weather表内的数据
  connection.query('SELECT * FROM weather',(err,data) => {
    res.send(data);
    res.end();
  })
})

//将模版暴露给bin/www  只需要nodemon www就可以访问数据
module.exports = app;
