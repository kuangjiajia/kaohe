//Promise写的异步ajax
var ajax = window.ajax = function(url) {
    return new Promise((resolve,reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET',url,true); 
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject('failed'); 
                }
            }
        }
        xhr.send();
    })
}


//通过ajax获取接口的数据，再把数据渲染到各个模版中
ajax('/dt').then( function(data) {
    var data = JSON.parse(data);
    let now_weather = document.querySelector('.now-weather'), //获取现在天气等接口
        weather_change = document.querySelector('.weather-change'), //获取天气变化范围的API
        weatherList = document.querySelectorAll('.week-weather-now li'), //获取一星期的天气的DOM
        MaxList = document.querySelectorAll('.temp-data li span'),//暂存数据最低温度DOM
        MinList = document.querySelectorAll('.temp-data li b'),//暂存数据的最高温度接口
        dateList = document.querySelectorAll('.week-day li'), //获取日期DOM
        windList = document.querySelectorAll('.week-wind li'); //获取风的DOM

    now_weather.innerText = data[0].weather + '°';  //渲染现在的温度
    weather_change.innerText = data[0].min_temp + '°' + '~' + data[0].max_temp + '°'; //渲染温度变化的范围
    for(var i = 0 ; i < 6 ; i++) {
        weatherList[i].innerText = data[i+1].weather;
        dateList[i].innerText = data[i+1].date;
        windList[i].innerText = data[i+1].wind;
    }
    for(var i = 0 ; i < 7 ; i ++) { //存入暂存温度的最高值和最低值
        MaxList[i].innerText = data[i].max_temp + '°';
        MinList[i].innerText = data[i].min_temp + '°';
    }
    draw();
})


//渲染现在的时间 
var dating = document.querySelector('.dating');


setInterval(function() {
    var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    weekArray = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    weekNow = weekArray[date.getDay()];

    dating.innerHTML = year + '年' + month + '月' + day + '日' +  '  ' + weekNow;
},1000);