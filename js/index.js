/*
* @Author: Administrator
* @Date:   2016-09-28 21:20:09
* @Last Modified by:   792675704
* @Last Modified time: 2016-10-08 14:34:58
*/


$(function(){
	$('.wei').hover(function() {
		$('.wei .sao').css("display","block")
	}, function() {
		$('.wei .sao').css("display","none")
	});
})
// gonggao
$(function(){
	setInterval(function(){ 
		var newList=$('.newsul :first').clone(true); 
		$('.newsul').append(newList); 
		$('.newsul :first').remove(); 
	},2000); 
})
//cart
$(function(){
	$('.cart').hover(function() {
		$('.inlist').css("display","block")
	}, function() {
		$('.inlist').css("display","none")
	});
})
// 分类的js
$(function(){
	$('.fenlei').hover(function() {
		$('.fenlei #fenlei').css("display","block")
	}, function() {
		$('.fenlei #fenlei').css("display","none")
	});
})
$(function(){
	$('.ctr').hover(function() {
		$('.arrowleft').css("display","block")
		$('.arrowright').css("display","block")
	}, function() {
		$('.arrowleft').css("display","none")
		$('.arrowright').css("display","none")
	});
})