SET NAMES utf8;
DROP DATABASE IF EXISTS qipao;
CREATE DATABASE qipao CHARSET=UTF8;
USE qipao;


CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) PRIMARY KEY  AUTO_INCREMENT,
  `user_name` varchar(100), 
  `user_pwd` varchar(100),
  `user_email` varchar(100),
  `user_birth` date,
  `regist_time` bigint
);

INSERT INTO `users` VALUES(NULL, 'kaixinjiuhao', '123456',
			'973367405@qq.com','1991-05-22','245853214');

