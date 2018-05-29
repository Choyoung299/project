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
//点击选中所有商品
var inp = document.querySelectorAll('input');
var floor_price=document.querySelector('.floor_price');
var pri=document.querySelector('.cgr-btm-price');
var scc=document.querySelector('.shop-car-com');
var ecm=document.querySelector('.edit-count-mp');
var num = 1;
var cbp2=document.querySelector('.cbp2');
var fllppp=document.querySelector('.fll_ppp')
//当只有一件商品时，默认为全选
	inp[0].onclick=function(){
		if(num==1){
			inp[0].style.backgroundPosition='0 0';
			inp[1].style.backgroundPosition='0 0';
			inp[2].style.backgroundPosition='0 0';
			inp[inp.length-1].style.backgroundPosition='0 0';
			num=0;
			//底部价格变动
			floor_price.innerHTML='￥'+ecm.innerHTML*cbp2.innerHTML;	
			//底部商品数量变动
			fllppp.innerHTML=1;	
		}	
		else{
			inp[0].style.backgroundPosition='0 100%';
			inp[1].style.backgroundPosition='0 100%';
			inp[2].style.backgroundPosition='0 100%';
			inp[inp.length-1].style.backgroundPosition='0 100%';
			num=1;
			//底部价格归零
			floor_price.innerHTML='￥0.00';
			//底部商品数量变动
			fllppp.innerHTML=0;	
		}	
	}
//选择购物车内所有商品
	inp[inp.length-1].onclick=function(){
		if(num==1){
			inp[0].style.backgroundPosition='0 0';
			inp[1].style.backgroundPosition='0 0';
			inp[2].style.backgroundPosition='0 0';
			inp[inp.length-1].style.backgroundPosition='0 0';
			num=0;	
			//底部价格变动
			floor_price.innerHTML='￥'+ecm.innerHTML*cbp2.innerHTML;	
			//底部商品数量变动
			fllppp.innerHTML=1;						
		}
		else{
			inp[0].style.backgroundPosition='0 100%'
			inp[1].style.backgroundPosition='0 100%';
			inp[2].style.backgroundPosition='0 100%';
			inp[inp.length-1].style.backgroundPosition='0 100%';
			num=1;
			//底部价格归零
			floor_price.innerHTML='￥0.00';
			//底部商品数量变动
			fllppp.innerHTML=0;	
		}
	}	
//点击选中目标商品
	scc.onclick=function(){
		if(num==1){
			scc.style.backgroundPosition='0 0';
			inp[0].style.backgroundPosition='0 0';
			num=0;	
			//底部价格变动
			floor_price.innerHTML=pri.innerHTML;					
		}
		else{
			scc.style.backgroundPosition='0 100%'
			inp[0].style.backgroundPosition='0 100%'
			num=1;
			//底部价格归零
			floor_price.innerHTML='￥0.00';
		}
	}
	inp[2].onclick=function(){
		if(num==1){
			inp[0].style.backgroundPosition='0 0'
			inp[2].style.backgroundPosition='0 0';
			num=0;	
			//底部价格变动
			floor_price.innerHTML=pri.innerHTML;					
		}
		else{
			inp[2].style.backgroundPosition='0 100%'
			inp[0].style.backgroundPosition='0 100%'
			num=1;
			//底部价格归零
			floor_price.innerHTML='￥0.00';
		}
	}
//点击编辑出现编辑内容页面
var topta = document.querySelector('.top-tr-a');
var edtopta=document.querySelector('.edit-a')
var goods = document.querySelector('.goods');
var edgoods = document.querySelector('.edit-goods');
var account = document.querySelector('.account');
var edacc = document.querySelector('.edit-account');
var cbn=document.querySelector('.car-btm-num');
var edcp=document.querySelector('.edit-count-mp');
	function topta1(){
		topta.style.display='none';
		goods.style.display='none';
		account.style.display='none';
		edtopta.style.display='block';
		edgoods.style.display='block';
		edacc.style.display='block';

	}
	topta.addEventListener("click",topta1);

	function edp1(){
		topta.style.display='block';
		goods.style.display='block';
		account.style.display='block';
		edtopta.style.display='none';
		edgoods.style.display='none';
		edacc.style.display='none';
		sh.style.display='block';
		inp[0].style.backgroundPosition='0 100%';
		inp[1].style.backgroundPosition='0 100%';
		//点击完成后关联商品数量
		cbn.innerHTML='x'+edcp.innerHTML;
	}
	edtopta.addEventListener("click",edp1);
//点击按钮增加减少商品数量
var edminus=document.querySelector('.edit-minus');
var edplus=document.querySelector('.edit-plus');
var edcp=document.querySelector('.edit-count-mp');
edminus.onclick=function(){
	var num=edcp.innerHTML*1;	
	if(edcp.innerHTML>1){
		edcp.innerHTML=num-1;
		edminus.style.background='white';
		edminus.style.color='#333';
	}
	else{
		edcp.innerHTML==1;
		edminus.style.background='#f6f6f6';
		edminus.style.color='#999';
	}
}
edplus.onclick=function(){
	var num=edcp.innerHTML*1;
	edcp.innerHTML=num+1;
}
//未选中商品时，弹出框
var account = document.querySelector('.account');
var accr = document.querySelector('.accr');
var accl = document.querySelector('.accl');
var inp=document.querySelectorAll('input');
var popup=document.querySelector('#popup');
var verify=document.querySelector('#verify');
var vercen=document.querySelector('.verify-center');
var verflr=document.querySelector('.verify-floor');
var il=document.querySelector('.ify-left');
var ifl=document.querySelector('.ify-floor-left');
var ir=document.querySelector('.ify-right');
var ifr=document.querySelector('.ify-floor-right');
var sh=document.querySelector('.shop-head')
account.onclick=function(){
	if(num==0){		
		window.open('register.html')
	}
	else{
		popup.classList.add('pop');
		popup.style.display='block';
		setTimeout(function(){
      		popup.classList.remove('pop');
      		popup.style.display='none';
   		 },1200)
	}
}
accl.onclick=function(){
	if(num==0){
		//点击收藏商品弹出选择框
		verify.style.display='block';
		verflr.style.display='block';
	}
	else{
		popup.classList.add('pop');
		popup.style.display='block';
		setTimeout(function(){
      		popup.classList.remove('pop');
      		popup.style.display='none';
   		 },1200)
	}
}
accr.onclick=function(){
	if(num==0){
		//点击删除商品弹出选择框
		verify.style.display='block';
		vercen.style.display='block';
	}
	else{
		popup.classList.add('pop');
		popup.style.display='block';
		setTimeout(function(){
      		popup.classList.remove('pop');
      		popup.style.display='none';
   		 },1200)
	}
}
function il_none(){
	verify.style.display='none';
	vercen.style.display='none';
}
function ir_none(){
	verify.style.display='none';
	vercen.style.display='none';
	edgoods.style.display='none';
	sh.style.display='none';
	fllppp.innerHTML=0;	
	floor_price.innerHTML='￥0.00';
	inp[inp.length-1].style.backgroundPosition='0 100%';
}
function ifl_none(){
	verify.style.display='none';
	verflr.style.display='none';
}
function ifr_none(){
	verify.style.display='none';
	verflr.style.display='none';
}
il.addEventListener("click",il_none);
ir.addEventListener("click",ir_none);
ifl.addEventListener("click",ifl_none);
ifr.addEventListener("click",ifr_none);

//点击购物车左上角返回详情页
var tl = document.querySelector('#top .tl');
tl.onclick=function(){
	window.open('details.html','_self');
}