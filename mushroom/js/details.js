//rem设定
!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width /320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));

//点击加入购物车，跳转到购物车页面
var addcar=document.querySelector('#floor .addcar');
addcar.onclick=function(){
	window.open('shopcar.html','_self');
}

//点击立即购买，跳转到购物车页面
var pay=document.querySelector('#floor .pay');
pay.onclick=function(){
	window.open('shopcar.html','_self');
}

//点击快捷导航，出现导航栏
var aside_more=document.querySelector('.aside_more');
var aside_down=document.querySelector('.aside_down');
var aside_quicknav=document.querySelector('.aside_quicknav');
var cover=document.querySelector('.cover');
aside_quicknav.onclick=function(){
    aside_quicknav.style.display='none';
    aside_down.style.display='block';
    aside_more.style.display='block';
    cover.style.display='block';

}
aside_down.onclick=function(){
    aside_quicknav.style.display='block';
    aside_down.style.display='none';
    aside_more.style.display='none';
    cover.style.display='none';
}
//侧边栏滚动显示
  window.onscroll= function(){
    var stick=document.querySelector('.stick');
    var aside=document.querySelector('#aside');
   
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    if(t >= 1000){
        stick.style.opacity='1';
        aside.style.bottom='5.5rem';
    }
    else{
          stick.style.opacity='0';
         aside.style.bottom='2.25rem';
    }
  }
     
