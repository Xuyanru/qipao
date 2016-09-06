<?php
	header('content-type:text/html;charset=utf-8');
?>
<div id="header">
			<div id="logo" class="lf">
				<a href="index.html"><img src="index/logo.png" alt=""></a>
			</div>
			<div  id="menu" class="rt">
				<p class="lf">Menu</p>
				<div class="line rt por ovh">
					<span class="top"></span>
					<span class="mid"></span>
					<span class="bot"></span>
				</div>
			</div>
			<div id="menu_list">
				<div class="menu_content lf">
					<ul>
						<li><a href="index.html">首页</a></li>
						<li><a href="culture.html">旗袍文化</a></li>
						<li><a href="fenlei.html">旗袍分类</a></li>
					</ul>
					<ul>
						<li><a href="news.html">新闻</a></li>
						<li><a href="appreciate.html">图片鉴赏</a></li>
						<li><a href="connect.html">联系我们</a></li>
					</ul>
				</div>
				<div class="lf menu_img">
					<img src="index/menu_bg.png">
				</div>
			</div>
		</div>
		<!-- 右边栏 -->
		<adide id="side">
			<div>您已经登录，请不要重复登录！<button id="confirm">确定</button></div>
			<a href="#" id="login">登录</a>
			<a href="#">收藏</a>
			<a href="#" id="top">TOP</a>
		</adide>
		<!-- 登录遮罩层 -->
        			<div class="modal">
        				<div class="modal-dialog">
        					<h2>用户登录</h2>
        					<div class="modal-content">
        						<p id="msg">请保管好您的注册信息，以防丢失。</p>
        						<form id="login-form" action="">
        							<input type="text" name='user_name' id="user_name" value="" placeholder="请输入用户名">
        							<input type="password" name='user_pwd' id="user_pwd" value=""
        							placeholder="请输入密码">
        							<input type="button" value="登录" id="login_btn">
        							<a href="regist.html"><input type="button" value="注册" id="regist_btn"></a>
        						</form>
        					</div>
        				</div>
        			</div>

		