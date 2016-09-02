<?php
header('content-type:application/json;charset=utf-8');
$uname=$_REQUEST['user_name'];
$upwd=$_REQUEST['user_pwd'];
$conn=mysqli_connect('127.0.0.1','root','','qipao',3306);
$sql="SET NAMES UTF8";
$result=mysqli_query($conn,$sql);
$sql="SELECT * FROM users WHERE user_name='$uname' AND user_pwd='$upwd'";
$result=mysqli_query($conn,$sql);
if($result){
	if(count($row=mysqli_fetch_assoc($result))>0){
		$arr=['msg'=>'SUCC','user_id'=>$row['user_id'],'name'=>$uname];
		$str=json_encode($arr);
		echo $str; 
	}else{
		$arr=['msg'=>'err','reason'=>'用户名或密码错误','sql'=>"$sql"];
		$str=json_encode($arr);
		echo $str; 
	
	}
}