/*
* @Author: 792675704
* @Date:   2016-09-29 21:20:36
* @Last Modified by:   792675704
* @Last Modified time: 2016-10-08 21:33:02
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
//banner2
/*全屏轮播图*/
$(function () {
    var banner = {
        init: function () {
            this.list = $(".banner-img ul li");
            this.arrow = $(".arrow");
            this.arrowLeft = $(".arrow-left");
            this.arrowRight = $(".arrow-right");
            this.adTitle = $('.ad-title a')
            this.now = 0;
            this.num = 0;
            this.tiner = null;
            this.autoplay();
            this.mouseover();
            this.leftClick();
            this.rightClick();
            this.circlemove();
        },
        /*定时器*/
        autoplay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.num++;
                that.num%= that.list.length;
                that.fade();
            },3000)
        },
        /*淡出淡入的交替*/
        fade: function () {
           // console.log(this.now , this.num)
            this.list.eq(this.now).fadeOut(1000);
            this.list.eq(this.num).fadeIn(1000);

            this.now =  this.num;
            this.adTitle.eq(this.num).addClass("cur").siblings().removeClass("cur");
        },
        /*鼠标移入移出*/
        mouseover:function () {
            var that = this;
            $(".banner-img").hover(function () {
                clearInterval(that.timer);
            },function () {
                that.autoplay();
            })
        },
        /*点击切换上一张图片*/
        leftClick: function () {
            var that = this;
            this.arrowLeft.click(function () {
                that.num--;
                that.num%= that.list.length;
                if(that.num<=0){
                    that.num=5;
                }
                console.log(that.num)
                that.fade();
            })
        },
        /*点击切换下一张图片*/
        rightClick: function () {
            var that = this;
            this.arrowRight.click(function () {
                that.num++;
                that.num%= that.list.length;
                console.log(that.num)
                that.fade();
            })
        },
        /*鼠标移入切换当前图片*/
        circlemove:function () {
            var that = this;
            this.adTitle.mouseenter(function () {
                that.num = $(this).index();
                that.fade();
            })
        }
    };
    banner.init();
});
//ban3
$(function(){
	var banner={
		init:function(){
			this.Left = $(".ban3_left");
            this.Right = $(".ban3_right");
            this.wrap3=$(".ban3wrap")
            this.liwudth=this.wrap3.find("li").first().width();
            this.listwudth=this.wrap3.find("li")
			this.nextclick();
			this.preclick();
			this.index=0;
		},
		switchImg:function(){//circles ciritem
			var that=this;
			this.wrap3.stop().animate({
				left:-that.index*that.liwudth
			}, 1000)
		},
		nextclick:function(){
			var that=this;
			this.Left.click(function(){
				that.index--;
				if (that.index <= 0) {
					that.index = 0
				};
				console.log(that.index)
				that.switchImg();
			})
		},
		preclick:function(){
			var that=this;
			this.Right.click(function(){
				that.index++;
				if (that.index >= 8) {
					that.index = 8;
				};
				console.log(that.index)
				that.switchImg();

			})
		}
	}
	banner.init();
})
