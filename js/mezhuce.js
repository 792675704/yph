/*
* @Author: 792675704
* @Date:   2016-10-11 18:12:10
* @Last Modified by:   792675704
* @Last Modified time: 2016-10-12 15:42:31
*/

'use strict';
$(function(){
	//手机号验证
	
	var ph=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
	$('input[name="user"]').blur(function(){
		var phon=$(this).val();
		if(phon.length<=0){
			$('.regs2').show();
			$(this).attr('data-date', "false");
		}else if(!ph.test(phon)){
			$('.regs3').show();
			$(this).attr('data-date', "false");
		}
		if(ph.test(phon)){
			$('.phonrent').addClass('duih')
			$('.regs1').hide();
			$('.regs2').hide();
			$('.regs3').hide();
			$(this).attr('data-date', "true");
		}
	})
	$('input[name="user"]').focus(function(){
		$('.regs1').show();
	})
	//密码验证
	var pwd= /^\w{6,20}$/;
	$('input[name="pswad"]').blur(function(){
		var pswad=$(this).val();
		if(pswad.length<=0){	
			$('.regm2').show();
			$(this).attr('data-date', "false");
		}else if(!pwd.test(pswad)){
			$('.regm3').show();
			$(this).attr('data-date', "false");
		}
		if(pwd.test(pswad)){
			$('.phonrent2').addClass('duih')
			$('.regm1').hide();
			$('.regm2').hide();
			$('.regm3').hide();
			$(this).attr('data-date', "true");
		}
	})
	$('input[name="pswad"]').focus(function(){
		//console.log("1")
		$('.regm1').show();
	})
	//再次确认密码
	$('input[name="qpwd"]').blur(function(){
		var qpwd=$(this).val();
		if(qpwd.length<=0){
			$('.regq2').show();
			$(this).attr('data-date', "false");
		}else if(qpwd!=$('input[name="pswad"]').val()){
			$('.regq3').show();
			$(this).attr('data-date', "false");
			$('.phonrent3').removeClass('duih')
		}
		if(qpwd==$('input[name="pswad"]').val()){
			$('.phonrent3').addClass('duih')
			$('.regq1').hide();
			$('.regq2').hide();
			$('.regq3').hide();
			$(this).attr('data-date', "true");
		}
	})
	$('input[name="qpwd"]').focus(function(){
		//console.log("2")
		$('.regq1').show();
	})
	//获取验证码
	// 随机验证码
	$('.yzmabtn').click(function(){
		createCode($('.yzma1'));
	})
	$('.yzmval').blur(function() {
		if($('.yzmval').length<=0){
			$('.yzm2').show();
			$(this).attr('data-date', "false");
		}else if($(this).val()!=$('.yzma1').html()){
			$('.yzm3').show();
			$(this).attr('data-date', "false");
		}
		if($(this).val()==$('.yzma1').html()){
			$('.yzm1').hide();
			$('.yzm2').hide();
			$('.yzm3').hide();
			$(this).attr('data-date', "true");
		}
	});
	$('.yzmval').focus(function(){
		//console.log("2")
		$('.yzm1').show();
	})
	 function createCode(codesb){
	 	var  codes = "";
	     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
	     'S','T','U','V','W','X','Y','Z');//随机数  
	     for(var i = 0; i < 4; i++) {//循环操作  
	        var index = Math.floor(Math.random()*random.length);//取得随机数的索引（0~35）  
	        codes += random[index];//根据索引取得随机数加到code上  
	    }  
	    codesb.html(codes);//把code值赋给验证码  
	 }
	 $('.reg-btn').click(function(){
	 	var fal =false
		var index = 0;
		var abg= 0;
	 	$('.stip').each(function(){
	 		abg++;
			console.log($(this).attr('class'))
			//console.log($(this).is('input[dataDate="true"]'))
			if($(this).is('input[data-date="true"]')){
				//console.log(3121)
				index++;
				fal = true;
				return
			}
		})
		if(index==abg){
			var userinfo = {
				username: $('#username').val(),
				password: $('#password').val()
			};
			console.log()
			$.cookie('userinfo',JSON.stringify( userinfo ),{expires: 10,path: '/'})
			alert('注册成功')
			//跳转到登录页面
			window.location.href = 'login.html';
		}else{
			createCode($('.yzma1'));
		}
	 })	
})
$(function(){
    var cont=$('.contitem')
   $('.navitem').click(function(){

        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        cont.eq($(this).index()).addClass('active').siblings().removeClass('active')
   })
})
$(function(){
	$('.bj1').click(function(){
		
	})
})