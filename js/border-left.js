/*
* @Author: Administrator
* @Date:   2016-09-28 21:20:09
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-09 16:39:49
*/



$(function(){
	 $('.bdleft').load('left.html',function(){
	 	$('#left li').hover(function(){
	 		$(this).find('.user-c').show();
	 	},function(){
			$(this).find('.user-c').hide();
	 	});


	 	$(function(){
			var backTop=$('.backtop')
			var flag=false;
			$(window).scroll(function() {
				var top = $(document).scrollTop();
				if(top>500&&!flag){

					flag=true;
				}
				if(top<500&&flag){

					flag=false;
				}
			});
			backTop.click(function(){
				$('body').animate({
					scrollTop:0
				})
			})
		})
	 });
	
})

