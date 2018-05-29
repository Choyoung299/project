//顶部my弹出框效果实现
var cc=document.querySelector('.cc');
var my=document.querySelector('.my');
cc.onmouseover=function(){
	my.style.display='block';
}
cc.onmouseout=function(){
	my.style.display='none';
}

//顶部sear部分添加阴影
var sear=document.querySelector('.sear');
var sear_inp=document.querySelector('.sear input');
var sear_a=document.querySelector('.sear a');
sear_inp.onmouseover=function(){
	sear.style.boxShadow='0px 1px 2px 2px #3b6caa';
}
sear_inp.onmouseout=function(){
	sear.style.boxShadow='';
}
sear_a.onmouseover=function(){
	sear_a.style.boxShadow='0px 1px 2px 1.5px #3B6CAA';
}
sear_a.onmouseout=function(){
	sear_a.style.boxShadow='';
}

//弹出层效果
var popup=document.querySelector('.popup');
var lulis=document.querySelectorAll('.left-ul li');
	lulis[0].onmouseover=function(){
		popup.style.display='block';
	}
	lulis[0].onmouseout=function(){
		popup.style.display='none';
	}
	popup.onmouseover=function(){
		popup.style.display='block';
	}
	popup.onmouseout=function(){
		popup.style.display='none';
	}
