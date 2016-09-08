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

CREATE TABLE IF NOT EXISTS `news`(
    `new_id` INT PRIMARY KEY AUTO_INCREMENT,
    `new_img` varchar(100),
    `new_title` varchar(50),
    `new_content` varchar,
    `new_time` date
);
INSERT INTO `news` VALUES(
     NULL,'index/news01.jpg','上海旗袍时尚文化活动在英国爱丁堡举行',
	'中国旗袍网讯 8月11日晚，在英国苏格兰首府爱丁堡的苏格兰民族博物馆, 模特身着上海旗袍走秀。 
	上海季海派旗袍的历史与创新活动11日晚在英国苏格兰首府爱丁堡的苏格兰民族博物馆举行，展现上海这座时尚都市的时尚历史、
	当今时尚创意和时尚文化。…',
	'2016-08-14'
);