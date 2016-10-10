$(function(){
	$('.login-btn').click(function(){
		var username = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();
		//读取cookie
		var userinfo = $.cookie('userinfo') || '{}';
		userinfo = JSON.parse( userinfo);
		if(username != userinfo.username || password != userinfo.password) {
			alert('用户名或者密码不正确');
			return;
		} 

		document.write(username);
	});
	$('.inp1').blur(function(){
			var username = $('input[name="username"]').val();
			var password = $('input[name="password"]').val();
			//console.log(username)
			if(!username){
				$('.cyin1').show();
				$('form input').addClass('focus1');
			}else if(username != userinfo.username){
				$('.cyin2').show();
				$('form input').addClass('focus1');
			}
	})
	$('.inp2').blur(function(){
			var username = $('input[name="username"]').val();
			var password = $('input[name="password"]').val();
			//console.log(username)
			if(!username){
				$('.cyin3').show();
				$('form input').addClass('focus1');
			}else if(username != userinfo.username){
				$('.cyin4').show();
				$('form input').addClass('focus1');
			}
	})
});
$(function(){
	var validate = {
		init: function(){
			this.focus();
			this.blur();
		},
		//文本框获取焦点
		focus: function(){
			$('form input').focus(function(){
				$(this).addClass('focus');
			});
		},
		//文本框失去焦点
		blur: function(){
			$('form input').blur(function(){
				$(this).removeClass('focus');
				//如果是用户名失去焦点
			});
		},

	};
	validate.init();
});
//span
$(function(){
	$('.ce_d').click(function(){
		$('.ce_d').hide();
	});
});

// $(function(){
// 	$('.login-btn').click(function(){
// 		var username = $('input[name="username"]').val();
// 		var password = $('input[name="password"]').val();
// 		//读取cookie
// 		var userinfo = $.cookie('userinfo') || '{}';
// 		userinfo = JSON.parse( userinfo);
// 		if(username != userinfo.username || password != userinfo.password) {
// 			alert('用户名或者密码不正确');
// 			return;
// 		}
// 		document.write(username);
// 	});
// });
