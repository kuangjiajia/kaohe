/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost
 Source Database       : forecast

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : utf-8

 Date: 08/18/2017 19:02:20 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `data`
-- ----------------------------
DROP TABLE IF EXISTS `weather`;
CREATE TABLE `weather` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `max_temp` float(3,1) NOT NULL,
  `min_temp` float(3,1) NOT NULL,
  `weather` varchar(10) NOT NULL,
  `date` varchar(10) NOT NULL,
  `wind` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `data`
-- ----------------------------
BEGIN;
INSERT INTO `weather` VALUES ('1', '39.4', '20.4', '多云','今天','东北风'), ('2', '10.2', '1.2', '晴','明天','西南风'), ('3', '30.1', '12.2', '暴雨','星期一','东风'), ('4', '41.1', '34.2', '冰雹','星期二','西北风'), ('5', '42.1', '22.3', '沙尘暴','星期三','西南风'), ('6', '12.5', '6.6', '台风','星期四','北风'), ('7', '21.4', '5.2', '雾霾','星期五','东北风');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
