<?php
header('content-type:application/plain;charset=utf-8');
$user_name=$_REQUEST['user_name'];
$user_pwd=$_REQUEST['user_pwd'];
$user_email=$_REQUEST['user_email'];
$user_birth=$_REQUEST['user_birth'];
$regist_time=Time()*1000;
$conn = mysqli_connect("127.0.0.1","-uroot","","qipao",3306);
$sql="SET NAMES UTF8";
$result=mysqli_query($conn,$sql);
$sql="INSERT INTO `users` VALUES(NULL, '$user_name', '$user_pwd',
			'$user_email','$user_birth',$regist_time)";
$result=mysqli_query($conn,$sql);
if($result){
	if(mysqli_insert_id($conn)>0){
		echo 'succ'; 
	}else{
		echo 'err'; 
	}
}