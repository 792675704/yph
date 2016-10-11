$(function(){
            var cont=$('.contitem')
           $('.navitem').click(function(){

                $(this).addClass('active');
                $(this).siblings().removeClass('active');
                cont.eq($(this).index()).addClass('active').siblings().removeClass('active')
           })
        })

$(function(){
	var validate = {
		init: function(){
			//属性
			this.uname = $('input[name="username"]');
			this.upassword = $('input[name="password"]');
			//默认都是验证成功的
			this.validate = {
				username: true,
				password: true
			};

			this.focus();
			this.blur();
			this.regClick();
		},
		//文本框获取焦点
		focus: function(){
			$('form input').focus(function(){
				$(this).addClass('focus');
			});
		},
		//文本框失去焦点
		blur: function(){
			var that = this;
			$('form input').blur(function(){
				$(this).removeClass('focus');
				//如果是用户名失去焦点
				if($(this).is('input[name="username"]')){
					//调用验证
					that.checkUName( $(this).val() );
				}
			});
		},
		//验证用户名是否已经存在
		checkUName: function(username){
			var that = this;
			//读取已经注册的用户
			$.getJSON('js/data.json',function(result){
				//console.log(result);
				that.validate.username = true;
				for(var key in result){
					if(username == result[key].username){
						//alert('用户名已存在');
						that.validate.username = false;
						break;
					}
				}
				if(!that.validate.username) {
					//that.uname.after('<p>用户名已存在</p>');
					alert('<p>用户名已存在</p>');
				}
			});
		},
		regClick: function(){
			var that = this;
			$('.reg-btn').click(function(){
				var flag = true;
				//判断所有验证是否合法
				for(var key in that.validate){
					if(!that.validate[key]){
						flag = false;
						break;
					}
				}
				if(!flag){
					alert('部分数据不合法');
					return;
				}

				alert('验证通过，正在保存数据...');

				//json对象转字符串
				//JSON.stringfy();
				var userinfo = {
					username: that.uname.val(),
					password: that.upassword.val()
				};
				$.cookie('userinfo',JSON.stringify( userinfo ),{expires: 10,path: '/'})

				//跳转到登录页面
				window.location.href = 'login.html';
			});
		}
	};
	validate.init();
});