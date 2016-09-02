//注册页面
	function formvalidaty(elem,elemTip,text){
		elem.onfocus=function(){
			elemTip.className="show control-default";
			elemTip.innerHTML=text.default;
		}
		elem.onblur=function(){
			if(elem.validity.valid){
				if(elem==reupwd&&elem.value!=upwd.value){
					elemTip.className="show control-error";
					elemTip.innerHTML="两次密码不一致";
				}else if(elem==uname){
					$.get("data/checkUname.php",{user_name:uname.value},function(response){
					if(response==='1'){
						elemTip.className="show control-error";
						elemTip.innerHTML="该用户名已经存在！";
					}else{
						elemTip.className="show control-success";
						elemTip.innerHTML=text.error+"输入正确！";
					};
				});
				}else{
					elemTip.className="show control-success";
					elemTip.innerHTML=text.error+"输入正确！";
				}
			}else if(elem.validity.valueMissing){
				elemTip.className="show control-error";
				elemTip.innerHTML=text.error+"不能为空！";
			}else if(elem.validity.patternMismatch||elem.validity.typeMismatch){
				elemTip.className="show control-error";
				elemTip.innerHTML=text.error+"输入有误！";
			}
		}
	}
var uname=document.getElementById("uname");
var usernameTip=document.getElementById("usernameTip");
formvalidaty(uname,usernameTip,{"default":"请输入8至16位的英文或数字.","error":"用户名"});
var upwd=document.getElementById("upwd");
var passwordTip=document.getElementById("passwordTip");
formvalidaty(upwd,passwordTip,{"default":"请输入6至12位的数字.","error":"密码"});
var reupwd=document.getElementById("reupwd");
var repasswordTip=document.getElementById("repasswordTip");
formvalidaty(reupwd,repasswordTip,{"default":"请输入6至12位的数字.","error":"确认密码"});
var email=document.getElementById("email");
var emailTip=document.getElementById("emailTip");
formvalidaty(email,emailTip,{"default":"请输入你的电子邮件地址.","error":"邮箱"});
var birth=document.getElementById("birth");
var birthTip=document.getElementById("birthTip");
formvalidaty(birth,birthTip,{"default":"请输入你的出生日期.","error":"出生日期"});
		$("#re_btn").on("click",function(e){
		   e.preventDefault();
			var p= $(this).parent().next();
//			var vals_flag=true;
//			$("#zhuce input").each(function(){
//				if($(this).val()===""){
//
//				}
//			});
			var regist_flag=true;
			var inputs=$("#zhuce input:not([type='submit'])");
			for(var i=0;i<inputs.length;i++){
				if(!($(inputs[i]).parent().next().hasClass("control-success"))){
					regist_flag=false;
					var tip=$(inputs[i]).parent().next();
					tip.addClass("show control-error");
					var str=$(inputs[i]).prev().html().slice(0,-1);
					if($(inputs[i]).val()==""){
						tip.html(`${str}不能为空!`);
						return;
					}else if(i==2){
						tip.html(`两次密码不一致！`);
						return;
					}else{
						tip.html(`${str}输入有误！`);
						return;
					}
				}
			}

			console.log(regist_flag);
//			console.log(vals_flag);
		   if(regist_flag){
				var request=$("#zhuce").serialize();
				$.post('data/register.php',request,function(response){
					if(response==="succ"){
						$("#register-inner").hide();
						$("#register_msg").show();
					}else{
						p.css("border","1px solid #e4393c");
						p.html("注册失败，请重新注册");
					}
            });
		   }

        });
		$("#register_msg span a").click(function(e){
			e.preventDefault();
			$(".modal").show();
			$("#register_msg").hide();
		});