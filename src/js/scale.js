window.onresize = window.onload = function(){	
	var deviceWidth = document.documentElement.clientWidth;//  320
	if(deviceWidth > 640) deviceWidth = 640; //设计稿宽度
	//document.documentElement.style.fontSize = deviceWidth / 7.2 + 'px'; 
	//假设html{font-size:100px}
	document.documentElement.style.fontSize = 100*deviceWidth / 640	+ 'px';
};