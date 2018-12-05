// 导航栏
window.onload=function(){
	var oNav=document.getElementsByClassName('nav-2')
var Oa = oNav[0].getElementsByTagName("a");
for (var i = 0; i < Oa.length; i++) {
	Oa[i].onmouseover = function(){
		console.log(i);
		for (var i = 0; i < Oa.length; i++) {
			Oa[i].className = '';
			Oa[i].style.color='white'
		}
		this.className = "nav-2-1";
		this.style.color='#3CC0FF'
	}
}

}

//轮播图

//弹出框
function aa(){
	document.getElementById("div2").style.display="block";
	
}
function bb(){
	document.getElementById("div2").style.display="none"
}
function cc(){
	document.getElementById("div3").style.display="block";
	
}
function dd(){
	document.getElementById("div3").style.display="none"
}
