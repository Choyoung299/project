// banner轮播图
	var banner = document.querySelector('.banner');
	var divs = document.querySelectorAll('.banner .bb');
	var index = 0;
	var timer;
	var len = divs.length
	var cc = document.querySelector('.cc')
	var spans = document.querySelectorAll('.cc span');
	hideDiv(0)
	function hideDiv(a){
		for(i=0;i<divs.length;i++){
			divs[i].style.display='none';
			spans[i].style.background = 'rgba(0,0,0,0.5)';
		}
		divs[a].style.display='block';	
		spans[a].style.background='white';	
	}
	time();
		function time(){
		timer=setInterval(function(){
			index++;
			if (index>=6) {
				index=0;
			}
			hideDiv(index)
		},3000)
	}
//鼠标悬停时停止计时器
	banner.onmouseover=function(){
		clearInterval(timer);
	}
	banner.onmouseout=function(){
		time()
	}
	cc.onmouseover = function(){
		clearInterval(timer);
	}
	cc.onmouseout = function(){
		time();
	}

	for(var j=0;j<len;j++){
		spans[j].index=j;
		spans[j].onclick=function(){
			hideDiv(this.index)
		}
	}

//顶部搜索框滚动显示
  window.onscroll= function(){
    var ts=document.querySelector('#topsear'); 
    var al=document.querySelector('.aside-left');
    var als=document.querySelectorAll('.aside-left a');
    var t =document.documentElement.scrollTop||document.body.scrollTop;
	    if(t >= 600){
	    	ts.style.display='block';
	    	al.style.display='block';
	    }
	    else{
	    	ts.style.display='none';
	    	al.style.display='none';
	    }
	  	if(t>=1300&&t<1900){
	    	als[1].style.background='#64C333';
	    }
	    else{
	    	als[1].style.background='#626262';
	    }
	    if(t>=1900&&t<2660){
	    	als[2].style.background='#000';
	    }
	    else{
	    	als[2].style.background='#626262';
	    }
	    if(t>=2660&&t<3340){
	    	als[3].style.background='#EA5F8D';
	    }
	    else{
	    	als[3].style.background='#626262';
	    }
	    if(t>=3340&&t<4020){
	    	als[4].style.background='#0AA6E8';
	    }
	    else{
	    	als[4].style.background='#626262';
	    }
	    if(t>=4020&&t<4700){
	    	als[5].style.background='#64C333';
	    }
	    else{
	    	als[5].style.background='#626262';
	    }
	    if(t>=4700&&t<5380){
	    	als[6].style.background='#F15453';
	    }
	    else{
	    	als[6].style.background='#626262';
	    }
	    if(t>=5380&&t<6160){
	    	als[7].style.background='#19C8A9';
	    }
	    else{
	    	als[7].style.background='#626262';
	    }
	    if(t>=6160){
	    	als[8].style.background='#000';
	    }
	    else{
	    	als[8].style.background='#626262';
	    }
  }
    
//天猫超市轮播广告
 	var cfloor = document.querySelector('.cfloor');
	var cfls = document.querySelectorAll('.cfloor div');
	var ind= 0;
	var timet;
	var len = cfls.length
	var ctab = document.querySelector('.ctab')
	var lis = document.querySelectorAll('.ctab li');
	hi(0)
	function hi(a){
		for(i=0;i<cfls.length;i++){
			cfls[i].style.display='none';
			lis[i].style.background = '#00B262';
		}
		cfls[a].style.display='block';	
		lis[a].style.background='white';	
	}
	times();
		function times(){
		timet=setInterval(function(){
			ind++;
			if (ind>=2) {
				ind=0;
			}
			hi(ind)
		},1000)
	}
	cfloor.onmouseover=function(){
		clearInterval(timet);
	}
	cfloor.onmouseout=function(){
		times()
	}