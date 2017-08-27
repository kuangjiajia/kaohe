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



ajax('/dt').then( function(data) {
    var data = JSON.parse(data);
    let weather_now = document.querySelector('.weather-now'),
        temp_data = document.querySelector('.temp-data'),
        now_weather = document.querySelector('.now-weather'),
        weather_change = document.querySelector('.weather-change'),
        weatherList = document.querySelectorAll('.weather-now li'),
        MaxList = document.querySelectorAll('.temp-data li span'),
        MinList = document.querySelectorAll('.temp-data li b'),
        dateList = document.querySelectorAll('.date li'),
        windList = document.querySelectorAll('.wind li');

        now_weather.innerText = data[0].weather;
        weather_change.innerText = data[0].min_temp + '~' + data[0].max_temp;
    for(var i = 0 ; i < 6 ; i++) {
        weatherList[i].innerText = data[i+1].weather;
        dateList[i].innerText = data[i+1].date;
        windList[i].innerText = data[i+1].wind;
    }
    for(var i = 0 ; i < 7 ; i ++) {
        MaxList[i].innerText = data[i].max_temp;
        MinList[i].innerText = data[i].min_temp;
    }
    draw();
})


