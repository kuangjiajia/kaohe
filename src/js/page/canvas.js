var draw = window.draw = function() {
    let canvas = document.querySelector('.canvas'), 
        ctx = canvas.getContext('2d'),//获取canvas并创建画布
        max_temp = document.querySelectorAll('.temp-data li span'),//得到暂存数据中的温度最高值
        min_temp = document.querySelectorAll('.temp-data li b');//得到暂存数据中的温度最低值
    let diff = [], arr = []; //diff => 平均温度数组  arr => 每一天的平均温度和第一天的差值 便于画图
    //获取每一天的平均温度
    for(var i = 0 ; i < max_temp.length ; i++) {
        diff.push(parseInt(max_temp[i].innerText) + parseInt(min_temp[i].innerText) / 2);
    }
    //获取每一天的温度与第一天的差值
    for(var j = 1 ; j < 7 ; j++) {
        arr.push(diff[j] - diff[0]);
    }
    //设定canvas画布的大小
    canvas.width = 712;
    canvas.height = 156;
    //开始画图
    ctx.beginPath();
    ctx.strokeStyle = '#333';
    ctx.lineCap = "round";
    ctx.font = "26px Arial";
    ctx.moveTo(60, 75 - arr[0]); 
    ctx.lineTo(178, 75 - arr[1]); 
    ctx.lineTo(296, 75 - arr[2]); 
    ctx.lineTo(414, 75 - arr[3]); 
    ctx.lineTo(532, 75 - arr[4]); 
    ctx.lineTo(655, 75 - arr[5]); 
    ctx.stroke();
    
    //填充最大温度
    ctx.fillText(max_temp[1].innerText,60 - 10, 75 - arr[0] - 20)
    ctx.fillText(max_temp[2].innerText,178 - 10, 75 - arr[1] - 20)
    ctx.fillText(max_temp[3].innerText,296 - 10, 75 - arr[2] - 20)
    ctx.fillText(max_temp[4].innerText,414 - 10, 75 - arr[3] - 20)
    ctx.fillText(max_temp[5].innerText,532 - 10, 75 - arr[4] - 20)
    ctx.fillText(max_temp[6].innerText,655 - 10, 75 - arr[5] - 20)
    //填充最小温度
    ctx.fillText(min_temp[1].innerText,60 - 10, 75 - arr[0] + 40)
    ctx.fillText(min_temp[2].innerText,178 - 10, 75 - arr[1] + 40)
    ctx.fillText(min_temp[3].innerText,296 - 10, 75 - arr[2] + 40)
    ctx.fillText(min_temp[4].innerText,414 - 10, 75 - arr[3] + 40)
    ctx.fillText(min_temp[5].innerText,532 - 10, 75 - arr[4] + 40)
    ctx.fillText(min_temp[6].innerText,655 - 10, 75 - arr[5] + 40)
    
    //在每一天那里画一个小圆点
    ctx.beginPath(); 
    ctx.arc(60, 75 - arr[0], 6, 0, 2 * Math.PI); 
    ctx.strokeStyle = '#259eed'; 
    ctx.fillStyle = "#259eed"; 
    ctx.fill(); 
    ctx.stroke();
    ctx.beginPath(); 
    ctx.arc(178, 75 - arr[1], 6, 0, 2 * Math.PI); 
    ctx.strokeStyle = '#259eed'; 
    ctx.fillStyle = "#259eed"; 
    ctx.fill(); 
    ctx.stroke();
    ctx.beginPath(); 
    ctx.arc(296, 75 - arr[2], 6, 0, 2 * Math.PI); 
    ctx.strokeStyle = '#259eed'; 
    ctx.fillStyle = "#259eed"; 
    ctx.fill(); 
    ctx.stroke();
    ctx.beginPath(); 
    ctx.arc(414, 75 - arr[3], 6, 0, 2 * Math.PI); 
    ctx.strokeStyle = '#259eed'; 
    ctx.fillStyle = "#259eed"; 
    ctx.fill(); 
    ctx.stroke();
    ctx.beginPath(); 
    ctx.arc(532, 75 - arr[4], 6, 0, 2 * Math.PI); 
    ctx.strokeStyle = '#259eed'; 
    ctx.fillStyle = "#259eed"; 
    ctx.fill(); 
    ctx.stroke();
    ctx.beginPath(); 
    ctx.arc(655, 75 - arr[5], 6, 0, 2 * Math.PI); 
    ctx.strokeStyle = '#259eed'; 
    ctx.fillStyle = "#259eed"; 
    ctx.fill(); 
    ctx.stroke();
}
