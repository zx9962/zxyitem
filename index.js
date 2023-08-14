window.onload = function(){
	var bananer = document.getElementById('banner');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var pages = document.querySelector('.pages');
	var oLi = document.querySelectorAll('.list li');
	
	var index = 1;
	var round = 0;
	var pic = 718;
	var isMove = false;
	var timer = null;
	
	var first = pages.firstElementChild.cloneNode(true);
	var last = pages.lastElementChild.cloneNode(true);
	pages.appendChild(first);
	pages.insertBefore(last,pages.children[0]);
	
	pages.style.left = -index * pic + "px";
	
	function tab(){
		isMove = true;
		pages.style.transition = "1s";
		pages.style.left = -index * pic + "px";
		for(var j=0;j<oLi.length;j++){
			oLi[j].className = "";
		}
		oLi[round].className = "one";
	}
	
	right.onclick = function(){
		if(isMove){return};
		index++;
		round++;
		if(round > oLi.length -1){
			round = 0;
		}
		tab();
		
		setTimeout(function(){
			if(index > pages.children.length - 2){
				index = 1;
				pages.style.transition = "none";
				pages.style.left = -index * pic + "px";
			}
			isMove = false;
		},1000);
	}	
	
	left.onclick = function(){
		if(isMove){return};
		index--;
		round--;
		if(round < 0){
			round = oLi.length -1;
		}
		tab();
		
		setTimeout(function(){
			if(index < 1){
				index = pages.children.length - 2;
				pages.style.transition = "none";
				pages.style.left = -index * pic + "px";
			}
			isMove = false;
		},1000);
	}	
	
	clearInterval(timer);
	timer = setInterval(function(){
		right.onclick();
	},1000);
	
	bananer.onmouseover = function(){
		clearInterval(timer);
	}
	bananer.onmouseout = function(){
		timer = setInterval(function(){
			right.onclick();
		},1000);
	}
	
	for(var i=0;i<oLi.length;i++){
		oLi[i].index = i;
		oLi[i].onclick = function(){
			index = this.index + 1;
			round = this.index;
			tab();
			isMove = false;
		}
	}
	
	
	
	
	
	
	
	
	
}