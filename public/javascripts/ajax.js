function ajax(obj){
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


function toData(obj){
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
            template_weather = "<% for(var i=1; i < data.length ; i++) {%><li><%= data[i].weather %></li><% } %>",
            template_data = "<% for(var i=0; i < data.length; i++) {%><li><span><%= data[i].max_temp %></span><b><%= data[i].min_temp %></b></li><% } %>",
            template_weather_now = "<%= data[0].weather%>",
            template_weather_change = "<%= data[0].min_temp%>~<%= data[0].max_temp%>",
            html_weather_now = ejs.render(template_weather_now,data),
            html_weather = ejs.render(template_weather,data),
            html_data = ejs.render(template_data,data),
            html_weather_change = ejs.render(template_weather_change,data);

            now_weather.innerHTML = html_weather_now;
            weather_now.innerHTML = html_weather;
            temp_data.innerHTML = html_data;
            weather_change.innerHTML = html_weather_change;
            draw();
    }
})

