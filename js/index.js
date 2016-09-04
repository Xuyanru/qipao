//加载页头页尾
//下拉菜单
var user_id;
$(function(){
	$("#header").load("data/header.php",function(){
		$("#menu").click(function(){
			if($("#menu_list").css("display")=="none"){
				$("#menu_list").slideDown(990);
				$("#main").animate({
					top:"167px"
				},990);
			}else {
				$("#menu_list").slideUp(990);
				$("#main").animate({
				top:"0px"
				},990);
			}
			rotate();
			});
		function rotate(){
			if($("#menu .mid").css("opacity")!=0){
				$("#menu .mid").animate({
					opacity:0
				},990);
				var moved1=0;
				var moved2=0;
				var t1=setInterval(function(){
					moved1++;
					if(moved1<=45){
						$("#menu .top").css("transform","rotate("+moved1+"deg)")
					}else{
						clearInterval(t1);
					}
				},22);
				var t2=setInterval(function(){
					moved2--;
					if(moved2>=-45){
						$("#menu .bot").css("transform","rotate("+moved2+"deg)")
					}else{
						clearInterval(t2);
					}
				},22);
			}else{
				$("#menu .mid").animate({
					opacity:1
				},990);
				var moved1=45;
				var moved2=-45;
				var t1=setInterval(function(){
					moved1--;
					console.log(moved1);
					if(moved1>=0){
						$("#menu .top").css("transform","rotate("+moved1+"deg)")
					}else{
						clearInterval(t1);
					}
				},22);
				var t2=setInterval(function(){
					moved2++;
					if(moved2<=0){
						$("#menu .bot").css("transform","rotate("+moved2+"deg)")
					}else{
						clearInterval(t2);
					}

				},22);
			}
		}
			//右边栏
				$("#top").click(function(e){
					e.preventDefault();
					window.scrollTo(0,0);
				});
			$("#confirm").click(function(){
				$(this).parent().css("opacity","0");
			});
		$("#login").click(function(){
			var storage=window.sessionStorage;
			if(storage.length!=0){
				$("#side>div").css("opacity","1");
				return false;

			}
			});
				
		});
			$("#login_btn").click(function(e){
				e.preventDefault();
				var requestMsg=$("#login-form").serialize();
				console.log($("#user_name").val());
				console.log($("#user_pwd").val());
				$.post('data/login.php',requestMsg,function(data){
					if(data.msg==="SUCC"){
						user_id=data.user_id;
						window.sessionStorage.setItem(data.user_id,data.name);
						window.location.href='http://127.0.0.1/qipao/index.html';
					}else{
						$("#msg").html(data.reason);
					}
				});
			});
			$("#regist_btn").click(function(){
				$(".modal").fadeOut();
				$("#register-inner").fadeIn();
			});

		//加载页脚
		$("#footer").load("data/footer.php");
});
//主页旗袍分类图片效果
$("#items div").hover(function(){
	$(this).children("div").animate({
		"width":"20%"
	},1000);
	$(this).children("div").children("a").show(1000);
},function(){
	$(this).children("div").animate({
		"width":"10%"
	},1000);
	$(this).children("div").children("a").hide(1000);
});
//旗袍文化页面图片效果
$(".culture_pic li").hover(function(e){
		$(this).children(".outer").css("display","block");
		$(this).addClass("moveIn");
		console.log(this);
		$(this).children(".outer").animate({
			"width":"100%",
			"height":"100%",
			"top":"0px",
			"left":"0px",
			"opacity":"0.7"
		},300);
},function(e){
		$(this).children(".outer").animate({
			"width":"0px",
			"height":"0px",
			"top":"50%",
			"left":"50%",
			"opacity":"0"
		},300,function(){
			$(this).css("display","none");
			$(this).parent().removeClass("moveIn");
		});
});
//卷轴打开
$(".culture_pic").on("click","li a",function(){
	var i=parseInt($(this).attr("href").slice(-1));
	console.log(i);
	if(!($(`#zhou_outer li:nth-child(${i})`).hasClass("active"))){
		$("#zhou_outer li.active .zhou_container").children(".zhou_modal").css("left","2.945%")
		$("#zhou_outer li.active").removeClass("active");
		$(`#zhou_outer li:nth-child(${i})`).addClass("active");
		$(`#zhou_outer li:nth-child(${i}) .zhou_container`).children(".zhou_modal").animate({
			left:"97.055%"
		},2000);
	}
});
//分类页面
$("#fl_items li").hover(function(){
  $(this).children("ul").show();
},function(){
  $(this).children("ul").hide();
});
$(".fl_nav li a").hover(function(){
  $(this).children("span").animate({
    "margin":"0 15px"
  });
},function(){
  $(this).children("span").animate({
    "margin":"0 8px"
  });
});
function fl_odds(fl_content_items){
		for(var i=0;i<fl_content_items.length;i++){
			$(fl_content_items[i]).append($(fl_content_items[i]).children(".fl_imgs_img")[0]).css("background","#d4d6d5");
		}
}
function fl_evens(fl_content_items){
		for(var i=0;i<fl_content_items.length;i++){
			$(fl_content_items[i]).append($(fl_content_items[i]).children(".fl_text")[0]).css("background","#d1c4c1");

		}
}
function create_fl_pages(fl_contents){
	var n=fl_contents.length;
	var i=0;
	if(n>6){
		if(n%6==0){
			i=parseInt(n/6);
		}else{
			i=parseInt(n/6)+1;
		}
		var frag=document.createDocumentFragment();
		for(var k=1;k<=i;k++){
			if(k==1){
				$(frag).append(`<li class='active'>${k}</li>`);
			}else{
				$(frag).append(`<li>${k}</li>`);
			}
		}
	}
	for(var s=0;s<6;s++){
		$(fl_contents[s]).css("display","block");
	}
	$("#fl_pages").append(frag);
	console.log(fl_contents);
}
$("#fl_pages").on("click","li",function(e){
	e.preventDefault();
	console.log(fl_contents);
	if(!($(this).hasClass("active"))){
		console.log(fl_contents);
		$("#fl_pages li.active").removeClass("active");
		console.log(this);
		$(this).addClass("active");
		var c=(parseInt(this.innerHTML)-1)*6;
		console.log(c);
		fl_contents.css("display","none");
		for(var s=c;s<c+6;s++){
			console.log(fl_contents[s]);
			$(fl_contents[s]).css("display","block");
		}
	}

});
var fl_contents=$("#fl_content>div:first-child>div:first-child .fl_content_item");
fl_odds($("#fl_content .fl_imgs:first-child .fl_content_item:nth-child(even)"));
create_fl_pages(fl_contents);
console.log(fl_contents);
$("#fl_items").on("click","li a",function(e){
  e.preventDefault();
  if(this.parentNode.parentNode.id=="fl_items"&&!($(this).hasClass("active out"))){
	  $("#fl_pages").html("");
	  $("#fl_content div.fl_content_item").css("display","none");
	  $("#fl_items>li>a.active").removeClass("active in");
	  $("#fl_items>li>a.active").removeClass("active out");
	 var i=$("#fl_items>li>a").index(this)+1;
	  fl_contents= $("#fl_content>div:nth-child("+i+")").find("div.fl_content_item");
	  var fl_content_odds= $("#fl_content>div:nth-child("+i+")").find("div.fl_content_item:odd");
	  var fl_content_evens= $("#fl_content>div:nth-child("+i+")").find("div.fl_content_item:even");
	  fl_odds(fl_content_odds);
	  fl_evens(fl_content_evens);
	  create_fl_pages(fl_contents);
	  console.log(fl_contents);
	 $(this).addClass("active out");
	 $(this).next().hide();
	} else if(this.parentNode.parentNode.className=="fl_nav"&&!($(this).hasClass("active in"))){
	  	$("#fl_pages").html("");
	  $("#fl_content div.fl_content_item").css("display","none");
	  	$("#fl_items>li>a.active").removeClass("active in");
	 	 $("#fl_items>li>a.active").removeClass("active out");
		var ul=this.parentNode.parentNode;
		var i=$(ul).children("li").children("a").index(this)+1;
		 var uli=$("#fl_items li ul").index(ul)+1;
	 	 var fl_content_evens= $("#fl_content>div:nth-child("+uli+")>div:nth-child("+i+") .fl_content_item:even");
	 	 var fl_content_odds= $("#fl_content>div:nth-child("+uli+")>div:nth-child("+i+") .fl_content_item:odd");
	 	  fl_contents=$("#fl_content>div:nth-child("+uli+")>div:nth-child("+i+") .fl_content_item");
	  	fl_evens(fl_content_evens);
	  	fl_odds(fl_content_odds);
	  	create_fl_pages(fl_contents);
		$(this).parent().parent().hide();
		$(this).parent().parent().prev().addClass("active in");
		}
  });


/*大图轮播*/
var lis=$("#banner_imgs>li");
var i=2;
var t=null;
function banner_animate(){
		$(lis[i]).animate({
		opacity:"0"
	},1000,function(){
		$(this).removeClass("active")
	});
	$("#idxs>li:nth-child("+(i+1)+")").removeClass("active");
	console.log(i);
	i++;
	if(i==3){
		i=0;
	}
	$(lis[i]).animate({
		opacity:"1"
	},1000,function(){
		$(this).addClass("active")
	});	
	$("#idxs>li:nth-child("+(i+1)+")").addClass("active");
};
banner_animate();
t=setInterval(banner_animate,5000);
$("#slider").on("mouseover",function(){
	console.log(111);
	clearInterval(t);
	t=null;
});
$("#slider").on("mouseout",function(){
	t=setInterval(banner_animate,5000);
});
$("#idxs").on("click","li",function(){
	i=$("#idxs li").index(this);
	clearInterval(t);
	$("#banner_imgs>li.active").animate({
		opacity:"0"
	},1000,function(){
		$(this).removeClass("active")
	});
	$("#idxs li.active").removeClass("active");
	$("#banner_imgs>li:nth-child("+(i+1)+")").animate({
		opacity:"1"
	},1000,function(){
		$(this).addClass("active")
	});
	$(this).addClass("active");
})
////图片鉴赏页面
function miss(str){
			$(str).animate({
				"width":"0",
				"height":"0",
				"marginTop":"189px",
				"marginLeft":"152px",
				"opacity":"0.3"
			},500,function(){
				$(str).parent().css("display","none");
			});
		}
		function show(str){
			var ads=[];
			$("#filter div:visible").each(function(i){	
				ads.push([this.offsetLeft,this.offsetTop]);
				$(this).css("left",this.offsetLeft).css("top",this.offsetTop);
			});
			$("#filter div").css("position","absolute");
			$("."+str).each(function(i){
				console.log($(this).height());
				$(this).parent().animate({
					"left":ads[i][0],
					"top":ads[i][1]
				},500,function(){
					$("#filter div").css("position","");
				});
			});
			var height=$(this).height();
			var Height=($("."+str).length)/4*height+($("#appreciate_menu").height());
			console.log(Height);
			$("#footer").css("position","absolute").css("top",Height+"px");
		}
		function unmiss(str){
			if(str){
				$("."+str).parent().css("display","block");
				$("."+str).animate({
					"width":"100%",
					"height":"100%",
					"margin":"0px",
					"opacity":"1",
				},500,function(){
						$("#footer").css("position","").css("top",0+"px");
					}
				);
			}else{
				$("#filter div").css("display","block");
				$("#filter div img").animate({
					"width":"100%",
					"height":"100%",
					"margin":"0px",
					"opacity":"1"
				},500,function(){
						$("#footer").css("position","").css("top",0+"px");
					}
				);
			}
			
		};
		$("#all").click(function(e){
			e.preventDefault();
			unmiss();
		});
		$("#star").click(function(e){
			e.preventDefault();
			miss("#filter div img[class!='stars']");
			unmiss("stars");
			show("stars");	
		});
		$("#classic").click(function(e){
			e.preventDefault();
			miss("#filter div img[class!='classic_pic']");
			unmiss("classic_pic");
			show("classic_pic");	
		});

