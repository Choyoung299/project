// 轮播图
var carousel = document.querySelector('#carousel');
	var divs = document.querySelectorAll('#carousel div');
	var index = 0;
	var timer;
	var len = divs.length
	var cc = document.querySelector('.cc')
	var spans = document.querySelectorAll('.cc span');
	hideDiv(0)
	function hideDiv(a){
		for(i=0;i<divs.length;i++){
			divs[i].style.display='none';	
			spans[i].style.background = 'white';
		}
		divs[a].style.display='block';	
		spans[a].style.background='#D43E2E';	
	}
	time();
		function time(){
		timer=setInterval(function(){
			index++;
			if (index>=len) {
				index=0;
			}
			hideDiv(index)
		},1000)
	}


//快抢活动倒计时
countdown()
function countdown(){
	var myDate = new Date();
	var hours = document.querySelectorAll('.time span')[0];
	var minter= document.querySelectorAll('.time span')[2];
	var second= document.querySelectorAll('.time span')[3];
		hours.innerHTML=myDate.getHours();
		minter.innerHTML=59-myDate.getMinutes();
		second.innerHTML=59-myDate.getSeconds();
		if(second.innerHTML<10){
			second.innerHTML='0'+second.innerHTML;
		}
		if(minter.innerHTML<10){
			minter.innerHTML='0'+minter.innerHTML;
		}
}
	setInterval(countdown,1000);

//点击下方分类按钮，跳转到另一页面
var indexs=document.querySelectorAll('.bottom_area a');
var index_idx=indexs[0],
	index_ify=indexs[1],
	index_car=indexs[2],
	index_ime=indexs[3];

	index_idx.onclick=function(){
		window.open('index.html','_self');
	}

	index_ify.onclick=function(){
		window.open('list.html','_self');
	}

	index_car.onclick=function(){
		window.open('shopcar.html','_self');
	}

	index_ime.onclick=function(){
		window.open('login.html','_self');
	}

