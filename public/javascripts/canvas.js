   function draw() {
       var canvas = document.querySelector('.canvas');
        var ctx = canvas.getContext('2d');
        var max_temp = document.querySelectorAll('.temp-data li span');
        var min_temp = document.querySelectorAll('.temp-data li b');
        // var min = [],max = [];
        var diff = [];
        var arr = [];
        for(var i = 0 ; i < max_temp.length ; i++) {
            diff.push(parseInt(max_temp[i].innerText) - parseInt(min_temp[i].innerText));
        }
        for(var j = 1 ; j < 7 ; j++) {
            arr.push(diff[j] - diff[0]);
        }
        console.log(diff);
        console.log(arr);
        canvas.width = 712;
        canvas.height = 156;
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.lineCap = "round";
        ctx.font = "26px Arial";
        ctx.moveTo(60, 75 + arr[0]); 
        ctx.lineTo(178, 75 + arr[1]); 
        ctx.lineTo(296, 75 + arr[2]); 
        ctx.lineTo(414, 75 + arr[3]); 
        ctx.lineTo(532, 75 + arr[4]); 
        ctx.lineTo(655, 75 + arr[5]); 
        ctx.stroke();
        
        ctx.fillText(max_temp[1].innerText,60 - 10, 75 + arr[0] - 20)
        ctx.fillText(max_temp[2].innerText,178 - 10, 75 + arr[1] - 20)
        ctx.fillText(max_temp[3].innerText,296 - 10, 75 + arr[2] - 20)
        ctx.fillText(max_temp[4].innerText,414 - 10, 75 + arr[3] - 20)
        ctx.fillText(max_temp[5].innerText,532 - 10, 75 + arr[4] - 20)
        ctx.fillText(max_temp[6].innerText,655 - 10, 75 + arr[5] - 20)
        
        ctx.fillText(min_temp[1].innerText,60 - 10, 75 + arr[0] + 40)
        ctx.fillText(min_temp[2].innerText,178 - 10, 75 + arr[1] + 40)
        ctx.fillText(min_temp[3].innerText,296 - 10, 75 + arr[2] + 40)
        ctx.fillText(min_temp[4].innerText,414 - 10, 75 + arr[3] + 40)
        ctx.fillText(min_temp[5].innerText,532 - 10, 75 + arr[4] + 40)
        ctx.fillText(min_temp[6].innerText,655 - 10, 75 + arr[5] + 40)
        
        ctx.beginPath(); 
        ctx.arc(178, arr[1], 4, 0, 2 * Math.PI); 
        ctx.strokeStyle = '#259eed'; 
        ctx.fillStyle = "#259eed"; 
        ctx.fill(); 
        ctx.stroke();
   }
