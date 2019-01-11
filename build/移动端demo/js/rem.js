//动态获取各种手机端的屏幕宽度使用rem
  	(function(){
  		var html = document.documentElement;
  		var hwidth = html.getBoundingClientRect().width;
  		console.log(hwidth)
  		//动态将屏幕除以16分成16份获得1rem=22.5px,那么100px就为2.25rem
  		html.style.fontSize = hwidth/16 + 'px'
  		//具体根据设计图给的宽度,假设要是手机屏幕为360宽就为360/16，相当于1rem = 22.5px  在浏览去控制台下面查看html的px
  		//要是div的字体要求16px 就用16px/22.5=0.71rem
  	})()