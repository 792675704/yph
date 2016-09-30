/*
* @Author: 792675704
* @Date:   2016-09-29 21:20:36
* @Last Modified by:   792675704
* @Last Modified time: 2016-09-30 11:27:19
*/
$(function(){
	var banner={
		init:function(){
			this.bannerw=$('.banner')
			this.imgw=this.bannerw.find('.imgwrap')
			this.arrowl=this.bannerw.find('.arrowleft')
			this.arrowr=this.bannerw.find('.arrowright')
			this.imgs=this.imgw.find('img')
			this.circles=this.bannerw.find('.ciritem')
			var firstimg=this.imgs.first().clone(true);
			var lastimg=this.imgs.last().clone(true);
			//在第一个位置添加最后一张图片
			this.imgw.prepend(lastimg);
			//在最后一个位置放第一张图片
			this.imgw.append(firstimg);

			//获取图片个数，及宽度
			this.imglength=$('.imgwrap img').length;
			this.imgwidth=firstimg.width();
			//console.log(firstimg.width())
			//.banner .imgwrap
			
				//this.imgs.width(screen.width)
		//$('.imgwrap').width(screen.width*6)
			//console.log($('.imgwrap').width())
			//改变imgw的偏移量
			this.imgw.width(this.imglength*this.imgwidth)

			this.imgw.css({
				marginLeft:-this.imgwidth
			})
			//imgw的偏移量
			this.index=1;
			this.timer=null;
			this.autoPlay();
			this.stopauto();
			this.nextclick();
			this.preclick();
			this.circlesclick();
		},
		autoPlay:function(){
			var that=this;
			this.timer=setInterval(function(){
				that.index++;
				that.switchImg();

			},1500);
		},
		switchImg:function(){//circles ciritem
			var that=this;
			//console.log(that.imgwidth)
			this.imgw.stop(true,true).animate({
				marginLeft:-that.imgwidth*that.index
			},500,function(){
				//you bian jie chu li ,dao da最后一张图片，拉回到真正的第一站
				if(that.index>=that.imglength-1){
					that.index=1;
				}
				if(that.index<=0){
					that.index=that.imglength-2;
				}
				that.imgw.css({
					marginLeft:-that.imgwidth*that.index
				})
				that.circles.eq(that.index-1).addClass('active')
				.siblings().removeClass('active')
			})
		},
		stopauto:function(){
			var that=this;
			$('.banner').hover(function(){
				clearInterval(that.timer)
			},function(){
				that.autoPlay();
			});
		},
		nextclick:function(){
			var that=this;
			this.arrowr.click(function(){
				that.index++;
				that.switchImg();
			})
		},
		preclick:function(){
			var that=this;
			this.arrowl.click(function(){
				that.index--;
				that.switchImg();
			})
		},
	
		circlesclick:function(){
			var that=this;
			this.circles.click(function(){
				that.index=$(this).index()+1
				that.switchImg();
			})
		}
	}
	banner.init();
})
