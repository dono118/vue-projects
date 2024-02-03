/*
 Navicat Premium Data Transfer

 Source Server         : news
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : my_db_01

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 09/12/2023 03:54:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ev_guest
-- ----------------------------
DROP TABLE IF EXISTS `ev_guest`;
CREATE TABLE `ev_guest`  (
  `guestId` int(0) NOT NULL AUTO_INCREMENT,
  `guestName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `identityId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deposit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `guestNum` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `leaveDate` datetime(0) NULL DEFAULT NULL,
  `resideDate` datetime(0) NULL DEFAULT NULL,
  `resideStateId` int(0) NULL DEFAULT NULL,
  `roomId` int(0) NULL DEFAULT NULL,
  `totalMoney` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`guestId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_guest
-- ----------------------------
INSERT INTO `ev_guest` VALUES (21, '熊大', '778899', '1111111', '66666', '2', NULL, '2023-12-06 00:00:00', 1, 18, NULL);
INSERT INTO `ev_guest` VALUES (22, '吉吉国王', '22222', '222222', '99999', '1', '2023-12-09 02:15:29', '2023-12-08 00:00:00', 2, 17, 98499);
INSERT INTO `ev_guest` VALUES (23, '光头强', '33333', '66666', '66666', '1', NULL, '2023-12-09 02:10:47', 1, 16, NULL);
INSERT INTO `ev_guest` VALUES (24, '熊二', '889977', '6666', '50000', '1', NULL, '2023-12-01 00:00:00', 1, 13, NULL);
INSERT INTO `ev_guest` VALUES (25, '李老板', '9988', '222111', '1111111', '1', NULL, '2023-12-14 00:00:00', 1, 3, NULL);
INSERT INTO `ev_guest` VALUES (26, '毛毛', '9999888', '123546', '112233', '1', NULL, '2023-12-09 02:13:26', 1, 11, NULL);

-- ----------------------------
-- Table structure for ev_residestate
-- ----------------------------
DROP TABLE IF EXISTS `ev_residestate`;
CREATE TABLE `ev_residestate`  (
  `resideStateId` int(0) NOT NULL AUTO_INCREMENT COMMENT '结账状态 1、未结账 2、已结账  ',
  `resideStateName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '状态名称',
  PRIMARY KEY (`resideStateId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_residestate
-- ----------------------------
INSERT INTO `ev_residestate` VALUES (1, '未结账');
INSERT INTO `ev_residestate` VALUES (2, '已结账');

-- ----------------------------
-- Table structure for ev_role
-- ----------------------------
DROP TABLE IF EXISTS `ev_role`;
CREATE TABLE `ev_role`  (
  `roleId` int(0) NOT NULL AUTO_INCREMENT,
  `roleName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`roleId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_role
-- ----------------------------
INSERT INTO `ev_role` VALUES (1, '系统管理员');
INSERT INTO `ev_role` VALUES (2, '普通管理员');
INSERT INTO `ev_role` VALUES (3, '妞妞大魔王');
INSERT INTO `ev_role` VALUES (5, '咪咪不埋⑩');
INSERT INTO `ev_role` VALUES (6, '十七大笨蛋');
INSERT INTO `ev_role` VALUES (7, '美团骑手阿罗');

-- ----------------------------
-- Table structure for ev_room
-- ----------------------------
DROP TABLE IF EXISTS `ev_room`;
CREATE TABLE `ev_room`  (
  `roomId` int(0) NOT NULL AUTO_INCREMENT COMMENT '房间ID',
  `roomStateId` int(0) NULL DEFAULT NULL COMMENT '房间状态',
  `roomTypeId` int(0) NULL DEFAULT NULL COMMENT '房间类型',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '简介',
  `guestId` int(0) NULL DEFAULT NULL COMMENT '顾客id',
  PRIMARY KEY (`roomId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_room
-- ----------------------------
INSERT INTO `ev_room` VALUES (1, 1, 1, '标准2床', NULL);
INSERT INTO `ev_room` VALUES (2, 1, 1, '标准', NULL);
INSERT INTO `ev_room` VALUES (3, 2, 2, '单', 25);
INSERT INTO `ev_room` VALUES (4, 1, 2, '单人房', NULL);
INSERT INTO `ev_room` VALUES (5, 1, 3, '大床', NULL);
INSERT INTO `ev_room` VALUES (6, 1, 3, '大床房间', NULL);
INSERT INTO `ev_room` VALUES (7, 1, 4, '三人', NULL);
INSERT INTO `ev_room` VALUES (8, 1, 4, '3人房间', NULL);
INSERT INTO `ev_room` VALUES (9, 1, 5, '套房', NULL);
INSERT INTO `ev_room` VALUES (10, 1, 5, '标准套房', NULL);
INSERT INTO `ev_room` VALUES (11, 2, 6, '豪华套房', 26);
INSERT INTO `ev_room` VALUES (12, 1, 6, '很豪华', NULL);
INSERT INTO `ev_room` VALUES (13, 2, 7, '77', 24);
INSERT INTO `ev_room` VALUES (14, 1, 7, '88', NULL);
INSERT INTO `ev_room` VALUES (15, 1, 8, NULL, NULL);
INSERT INTO `ev_room` VALUES (16, 2, 8, NULL, 23);
INSERT INTO `ev_room` VALUES (17, 1, 9, NULL, NULL);
INSERT INTO `ev_room` VALUES (18, 2, 9, '99999999', 21);

-- ----------------------------
-- Table structure for ev_roomstate
-- ----------------------------
DROP TABLE IF EXISTS `ev_roomstate`;
CREATE TABLE `ev_roomstate`  (
  `roomStateId` int(0) NOT NULL AUTO_INCREMENT COMMENT '房间状态ID：1、空闲 2、入住 3、维修',
  `roomStateName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '房间状态名称',
  PRIMARY KEY (`roomStateId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_roomstate
-- ----------------------------
INSERT INTO `ev_roomstate` VALUES (1, '空闲');
INSERT INTO `ev_roomstate` VALUES (2, '入住');
INSERT INTO `ev_roomstate` VALUES (3, '维修');

-- ----------------------------
-- Table structure for ev_roomtype
-- ----------------------------
DROP TABLE IF EXISTS `ev_roomtype`;
CREATE TABLE `ev_roomtype`  (
  `roomTypeId` int(0) NOT NULL AUTO_INCREMENT COMMENT '房型编号',
  `roomTypeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '房型名称',
  `roomTypePrice` int(0) NULL DEFAULT NULL COMMENT '房型价格',
  `bedNum` int(0) NULL DEFAULT NULL COMMENT '床位数',
  `typeDescription` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '房型简介',
  `typeTotalMoney` int(0) NULL DEFAULT NULL COMMENT '房型销售总额',
  PRIMARY KEY (`roomTypeId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_roomtype
-- ----------------------------
INSERT INTO `ev_roomtype` VALUES (1, '标准间', 120, 2, '标准2床房间', 500);
INSERT INTO `ev_roomtype` VALUES (2, '单人间', 166, 1, '单人房', 300);
INSERT INTO `ev_roomtype` VALUES (3, '大床房', 188, 1, '豪华大床房', 400);
INSERT INTO `ev_roomtype` VALUES (4, '三人间', 300, 3, '多人房间', 500);
INSERT INTO `ev_roomtype` VALUES (5, '标准套房', 500, 2, '标准房间', 1000);
INSERT INTO `ev_roomtype` VALUES (6, '豪华套房', 600, 2, '可以k歌', 1000);
INSERT INTO `ev_roomtype` VALUES (7, '商务套房', 800, 3, '真不错', 250);
INSERT INTO `ev_roomtype` VALUES (8, '总统套房', 1200, 4, '你值得拥有', 600);
INSERT INTO `ev_roomtype` VALUES (9, '定制套房', 1500, 1, '太酷了', 10388);

-- ----------------------------
-- Table structure for ev_users
-- ----------------------------
DROP TABLE IF EXISTS `ev_users`;
CREATE TABLE `ev_users`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userPic` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `roleId` int(0) NOT NULL COMMENT '1是系统管理员、2是普通管理员',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_users
-- ----------------------------
INSERT INTO `ev_users` VALUES (1, 'admin', '123456', '管理员', '66666', 'http://127.0.0.1:80/static/image1701632006885.jpg', 1);
INSERT INTO `ev_users` VALUES (3, '十七大笨蛋', '123456', '十七', '1234567', 'http://127.0.0.1:80/static/image1701631984905.jpg', 1);
INSERT INTO `ev_users` VALUES (6, '妞妞', '666666', '妞妞大魔王', '125800000', 'http://127.0.0.1:80/static/image1701631952645.jpg', 2);
INSERT INTO `ev_users` VALUES (7, 'xiaobai', '123456', '小白', '123456789', 'http://127.0.0.1:80/static/image1701630713646.jpg', 1);
INSERT INTO `ev_users` VALUES (8, 'mimi', '1111111', '咪咪', '6666', 'http://127.0.0.1:80/static/image1701636907827.jpg', 5);
INSERT INTO `ev_users` VALUES (9, 'ceshi', 'cewww', '测试', '66666666', 'http://127.0.0.1:80/static/image1701637057415.jpg', 6);

SET FOREIGN_KEY_CHECKS = 1;
