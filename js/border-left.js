/*
* @Author: Administrator
* @Date:   2016-09-28 21:20:09
* @Last Modified by:   792675704
* @Last Modified time: 2016-10-08 11:59:03
*/



$(function(){
	$('.closel').click(function(event) {
		$('.care_left1').css("display","none")
	});
	$('.user-c1').hover(function() {
		$('.care_left1').css("display","block")
	}, function() {
		$('.care_left1').css("display","none")
	});
	$('.user-c2').hover(function() {
		$('.user-c22').css("display","block")
	}, function() {
		$('.user-c22').css("display","none")
	});
	$('.user-c3').hover(function() {
		$('.user-c23').css("display","block")
	}, function() {
		$('.user-c23').css("display","none")
	});
	$('.user-c4').hover(function() {
		$('.user-c24').css("display","block")
	}, function() {
		$('.user-c24').css("display","none")
	});
	$('.user-c5').hover(function() {
		$('.user-c25').css("display","block")
	}, function() {
		$('.user-c25').css("display","none")
	});
	$('.user-c6').hover(function() {
		$('.user-c26').css("display","block")
	}, function() {
		$('.user-c26').css("display","none")
	});
	$('.user-c7').hover(function() {
		$('.user-c27').css("display","block")
	}, function() {
		$('.user-c27').css("display","none")
	});
})
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
