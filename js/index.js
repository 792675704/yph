/*
* @Author: Administrator
* @Date:   2016-09-28 21:20:09
* @Last Modified by:   792675704
* @Last Modified time: 2016-09-29 21:20:07
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
// 分类的js
$(function(){
	$('.fenlei').hover(function() {
		$('.fenlei #fenlei').css("display","block")
	}, function() {
		$('.fenlei #fenlei').css("display","none")
	});
})