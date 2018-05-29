//验证账户名与密码正则
var usename=document.querySelector('.name input');
var usepsw=document.querySelector('.pass input');
var psw1=document.querySelector('.psw1');
var psw2=document.querySelector('.psw2');
var btn=document.querySelector('button');
var pat = /^[a-zA-Z0-9_-]{6,16}$/;
//usename获取焦点时清空placeholder内容
usename.onfocus=function(){
	this.placeholder='';
}
//usename失去焦点时判断内容是否复合正则
usename.onblur=function(){
	if(pat.test(usename.value)){
		console.log(1)
	}
	else{
		psw1.style.display='none';
		psw2.style.display='block';
		psw2.innerHTML='<img src="img/stop.jpg" alt="">'+'请输入正确的用户名';
	}
}
//usepsw失去焦点时判断内容是否符合正则
usepsw.onblur=function(){
	if(pat.test(usepsw.value)){
		console.log(2)
	}
	else{
		psw1.style.display='none';
		psw2.style.display='block';
		psw2.innerHTML='<img src="img/stop.jpg" alt="">'+'请输入正确的密码';
	}
}
//点击按钮时进行判断是否合法
btn.onclick=function(){	
	//判断用户名是否合法，合法则进行下一层判断，不合法则提示错误
	if(usename.value==''){
		psw1.style.display='none';
		psw2.style.display='block';
		psw2.innerHTML='<img src="img/stop.jpg" alt="">'+'用户名不能为空';
	}
	//判断密码是否合法，合法则进行下一层判断，不合法则提示错误
	else if(usepsw.value==''){
		psw1.style.display='none';
		psw2.style.display='block';
		psw2.innerHTML='<img src="img/stop.jpg" alt="">'+'密码不能为空';
	}
	//当用户名和密码都合法时，跳转到主页
	else if(pat.test(usename.value)&&pat.test(usepsw.value)){
		window.open('index.html','_self')
	}
}

//重置表单信息
psw2.onclick=function(){
	psw2.style.display='none';
	psw1.style.display='block';
	usename.value='';
	usepsw.value='';
}
//点击切换帐号密码登录或二维码登录
var form=document.querySelector('.form');
var fewm=document.querySelector('.fewm');
var form_sm=document.querySelector('.form span');
var fewm_sm=document.querySelectorAll('.fewm span')[0];
form_sm.onclick=function(){
	form.style.display='none';
	fewm.style.display='block';
}
fewm_sm.onclick=function(){
	fewm.style.display='none';
	form.style.display='block';
}