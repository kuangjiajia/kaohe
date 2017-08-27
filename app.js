var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mysql'
});
connection.connect(function() {
  console.log('connect success!');
})
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.get('/',(req,res) => {
  var data;
  connection.query('SELECT * FROM data',(err,results,fields) => {
    data = results; 
    res.render('index',{data});
    res.end();
  })
})


app.get('/dt',(req,res) => {
  console.log(path.join(__dirname,'/public/data.json'));
  fs.readFile(path.join(__dirname,'/public/data.json'),'utf8',(err,data) => {
      console.log(data);
      res.writeHead(200,{'Content-Type':'text/plain,charset=utf8'});
      res.end(data);
  })
})


// app.use('/',index);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.get('/',(req,res) => {
//   res.render('index');
// })

module.exports = app;
