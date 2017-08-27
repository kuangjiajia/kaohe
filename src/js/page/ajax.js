window.ajax = ajax = function(obj){
    obj.type = obj.type || "get";
    obj.async = obj.async || true;
    obj.data = obj.data || null;
    if (window.XMLHttpRequest){
        var ajax = new XMLHttpRequest();
    }else{
        var ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (obj.type == "post"){
        ajax.open(obj.type,obj.url,obj.async);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = toData(obj.data);
        ajax.send(data);
    }else{
        var url = obj.url+"?"+toData(obj.data);
        ajax.open(obj.type,url,obj.async);
        ajax.send();
    }

    ajax.onreadystatechange = function (){
        if (ajax.readyState == 4){
                if (ajax.status>=200&&ajax.status<300 || ajax.status==304){
                    if (obj.success){
                        obj.success(ajax.responseText);
                    }
                }else{
                    if (obj.error){
                        obj.error(ajax.status);
                    }
                }
            }
      }   
}

window.toData = toData = function(obj) {
    if (obj == null){
        return obj;
    }
    var arr = [];
    for (var i in obj){
        var str = i+"="+obj[i];
        arr.push(str);
    }
    return arr.join("&");
}

ajax({
    'url':'/dt',
    'success': function(data) {
        var data = JSON.parse(data);
        console.log(data);
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
    }
})


