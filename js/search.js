$(function(){
	var search = {
		init: function(){
			//属性
			this.seachInput = $('.search-input');
			this.searchContent = $('.search-content ul');

			//方法调用
			this.valueChange();
		},
		//实时监控文本框的内容
		valueChange: function(){
			var that = this;
			this.seachInput.on('input propertychange',function(){
				//console.log( that.seachInput.val() );
				that.getData( that.seachInput.val() );
			});
		},
		//通过ajax获取后台数据
		getData: function(data){
			var that = this;
			$.ajax({
				url: 'http://suggest.taobao.com/sug?code=utf-8',
				data: {
					q: data
				},
				//跨域
				dataType: 'jsonp',
				//result 服务器返回的数据
				success: function(data){
					console.log(data);
					var content = '';
					for(var key in data.result){
						content += '<li>'+data.result[key][0]+'</li>'
					}
					that.searchContent.html(content); 
				}
			});
		}
	};
	search.init();
});