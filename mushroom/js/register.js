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

//验证手机号是否合法
var inp = document.querySelectorAll('input')[0];
var check=document.querySelector('.check');
var reginp=document.querySelector('input');
var pat = /^1[0-9]{10}$/ 
	inp.onblur = function(){
		// var pat = /^1[0-9]{10}$/ 
			if(pat.test(inp.value)){
				check.style.background='url(img/check01.png) no-repeat center';
				check.style.display='block';
			}
			else{
				check.style.background='url(img/check02.png) no-repeat center';
				check.style.display='block';
				}
		function tt(){
			if(check.style.background='url(img/check02.png) no-repeat center'){
				inp.value='';
				check.style.display='none';
			}
		}
			check.addEventListener("click",tt);
	}
//点击发送验证码
var btn=document.querySelector('#btn');
var verinp=document.querySelectorAll('.verify input')[1];
var countdown=5; 
	function ctt(){ 
		verinp.value='';
		ctime=setInterval(function(){
			if(countdown == 0) {  
			btn.removeAttribute("disabled");   
			btn.value="发送验证码"; 
			countdown = 5;
			clearInterval(ctime);
			//input获得四位数字验证码
			var arr = [];
			var str = '';
				for(var i=97;i<=122;i++){
					arr.push(String.fromCharCode(i))
				}
				for(var j=65;j<=90;j++){
					arr.push(String.fromCharCode(j))
				}
				for(var k=48;k<=57;k++){
					arr.push(String.fromCharCode(k))
				}
				for(var a=0;a<4;a++){
					var index = parseInt(Math.random()*arr.length);
					verinp.value+=arr[index];
				}
			} 
			else{ 
				btn.setAttribute("disabled", true); 
				btn.value="重新发送(" + countdown + ")"; 
				countdown--; 
			} 	
		},1000)
	}
//当手机号不合法时，禁止显示验证码并提示手机号码错误	
	btn.onclick=function(){
		if(reginp.value==''){
			check.style.display='block';
			check.style.background='url(img/check02.png) no-repeat center'
		}
		else{
			btn.addEventListener("click",ctt);
		}
		
	}
//当手机号与验证码都合法时，点击一键注册跳转页面，反之，提示错误
var log=document.querySelector('.log');
log.onclick=function(){
	if(pat.test(inp.value)){
		window.open('login.html')
	}
	else{
		check.style.display='block';
		check.style.background='url(img/check02.png) no-repeat center'
		
	}
}
	
//点击左上角箭头时，跳转到登录界面
var topi=document.querySelector('.top i');
topi.onclick=function(){
	window.open('login.html','_self')
}
