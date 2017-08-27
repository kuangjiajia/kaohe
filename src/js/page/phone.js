var designWidth = 375, 
    rem2px = 100;
if(window.innerWidth < 640 ){ //规定屏幕最大为640 保证电脑端看起来没有那么突兀
    document.documentElement.style.fontSize = ((window.innerWidth / designWidth) * rem2px) + 'px';
}else {
    document.documentElement.style.fontSize = ((640 / designWidth) * rem2px) + 'px';
}
//自己写的一个手机适配方案 很简单