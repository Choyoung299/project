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

//验证帐号密码是否合法
var cup=document.querySelector('.check_up');
var cdn=document.querySelector('.check_down');
var uname=document.querySelectorAll('.reg input')[0];
var upsd=document.querySelectorAll('.reg input')[1];
var pat = /^[a-zA-Z0-9_-]{6,16}$/ 
	uname.onblur = function(){
			if(pat.test(uname.value)){
				cup.style.background='url(img/check01.png) no-repeat center';
				cup.style.display='block';
			}
			else{
				cup.style.background='url(img/check02.png) no-repeat center';
				cup.style.display='block';
				}
		function tt(){
			if(cup.style.background='url(img/check02.png) no-repeat center'){
				uname.value='';
				cup.style.display='none';
			}
		}
			cup.addEventListener("click",tt);
	}
	upsd.onblur = function(){
			if(pat.test(upsd.value)){
				cdn.style.background='url(img/check01.png) no-repeat center';
				cdn.style.display='block';
			}
			else{
				cdn.style.background='url(img/check02.png) no-repeat center';
				cdn.style.display='block';
				}
		function tt(){
			if(cdn.style.background='url(img/check02.png) no-repeat center'){
				upsd.value='';
				cdn.style.display='none';
			}
		}
			cdn.addEventListener("click",tt);
	}

//当帐号密码都合法时，跳转页面，若不合法，则显示报错信息
var log=document.querySelector('.log');
log.onclick=function(){
	if(pat.test(uname.value)&&pat.test(upsd.value)){	
		window.open('index.html')
	}
}
//当点击忘记密码时，跳转到注册页面
var top_span=document.querySelectorAll('.top span')[1];
top_span.onclick=function(){
	window.open('register.html','_parent')
}

//当点击注册时，跳转到注册页面
var fa=document.querySelectorAll('.floor a')[1];
fa.onclick=function(){
	window.open('register.html','_parent')
}
