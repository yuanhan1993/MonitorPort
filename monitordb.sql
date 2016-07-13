/*
Navicat MySQL Data Transfer

Source Server         : system
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : monitordb

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2016-07-13 17:41:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `m_admin`
-- ----------------------------
DROP TABLE IF EXISTS `m_admin`;
CREATE TABLE `m_admin` (
  `a_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `a_name` varchar(20) NOT NULL COMMENT '管理员姓名',
  `a_phone` varchar(11) NOT NULL COMMENT '管理员手机号码',
  `a_idcard` varchar(18) NOT NULL COMMENT '管理员身份证号码',
  `a_location` varchar(30) NOT NULL COMMENT '管理员籍贯',
  `a_permission` char(1) NOT NULL DEFAULT '1' COMMENT '权限，1代表最高权限，2代表普通权限',
  `a_username` varchar(30) NOT NULL COMMENT '登录用户名',
  `a_password` varchar(30) NOT NULL COMMENT '登录密码',
  PRIMARY KEY (`a_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_admin
-- ----------------------------
INSERT INTO `m_admin` VALUES ('1', '金克拉', '18000000000', '320321111111111111', '江苏徐州', '1', 'admin1', '123456');

-- ----------------------------
-- Table structure for `m_message`
-- ----------------------------
DROP TABLE IF EXISTS `m_message`;
CREATE TABLE `m_message` (
  `m_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '序号',
  `u_id` int(8) NOT NULL COMMENT '用户id',
  `m_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '时间',
  `m_msg` varchar(40) NOT NULL COMMENT '报警消息描述',
  `m_status` int(1) NOT NULL COMMENT '状态,1代表已处理，0代表未处理',
  `m_location` varchar(140) NOT NULL COMMENT '地区',
  `m_result` text COMMENT '处理结果',
  `m_video` varchar(200) NOT NULL COMMENT '视频路径',
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='信息id';

-- ----------------------------
-- Records of m_message
-- ----------------------------
INSERT INTO `m_message` VALUES ('1', '2', '2016-05-25 19:26:41', '一人非法入侵', '0', '小行小区三楼', '', '20160525194444');
INSERT INTO `m_message` VALUES ('2', '2', '2016-05-25 19:27:01', '一人非法入侵', '0', '小行小区三楼', '', '20160525194444');
INSERT INTO `m_message` VALUES ('3', '1', '2016-05-26 19:32:20', '一人非法入侵', '0', '航空大学食堂二楼', '', '20160525194444');
INSERT INTO `m_message` VALUES ('4', '1', '2016-05-26 19:32:25', '一人非法入侵', '0', '航空大学食堂二楼', '', '20160525194444');
INSERT INTO `m_message` VALUES ('5', '1', '2016-05-26 19:38:28', '一人非法入侵', '0', '某某大学食堂一楼', '', '20160525194444');
INSERT INTO `m_message` VALUES ('6', '1', '2016-05-26 13:02:10', '一人非法入侵', '0', '某某大学食堂一楼', '', '20160525194444');
INSERT INTO `m_message` VALUES ('7', '1', '2016-05-26 19:44:44', '一人非法入侵', '1', '某某大学食堂四楼', '呵呵哒', '20160525194444');
INSERT INTO `m_message` VALUES ('8', '1', '2016-05-20 11:11:30', '一人非法入侵', '1', '航空大学食堂一楼', 'hhhhh', '20160525194444');
INSERT INTO `m_message` VALUES ('9', '1', '2016-05-25 09:35:33', '一人非法入侵', '0', '航空大学食堂二楼', '', '20160525194444');
INSERT INTO `m_message` VALUES ('10', '1', '2016-05-20 11:07:07', '一人非法入侵', '1', '航空大学资料库', 'just do it!', '20160525194444');

-- ----------------------------
-- Table structure for `m_notice`
-- ----------------------------
DROP TABLE IF EXISTS `m_notice`;
CREATE TABLE `m_notice` (
  `n_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '公告id',
  `n_title` varchar(20) NOT NULL COMMENT '公告标题',
  `n_shortContent` varchar(140) NOT NULL COMMENT '内容简介',
  `n_content` varchar(1024) NOT NULL COMMENT '公告内容',
  `n_startDate` date NOT NULL COMMENT '开始时间',
  `n_endDate` date NOT NULL COMMENT '结束时间',
  `n_flag` char(1) NOT NULL COMMENT '标记，0为发布，1为不发布',
  `n_publisher` varchar(140) NOT NULL COMMENT '发布者',
  `n_publishDate` date NOT NULL COMMENT '发布时间',
  PRIMARY KEY (`n_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_notice
-- ----------------------------
INSERT INTO `m_notice` VALUES ('1', '网络运营商设备维护公告', '现接just入侵报警通知，其网络运营商将于2016年3月30日凌晨04:00至04:30进行设备维护。', '现接just入侵报警通知，其网络运营商将于2016年3月30日凌晨04时00分至04时30分进行设备维护。届时将影响您在专属互联网金融平台的B2C网银充值和一键支付充值。在此期间，建议您避开该时段进行以上充值操作。 设备升级维护给您带来的不便敬请谅解！ 感谢您对just入侵报警团队的理解与支持！', '2016-05-18', '2016-06-30', '1', '入侵报警运营项目组', '2016-05-19');
INSERT INTO `m_notice` VALUES ('2', '招贤纳士', '诚邀各路大神', '现招聘各路大神加入入侵报警项目组，精通c++,java,mysql数据库者优先，有做产品经验的可与王经理联系。技术部电话18052750704，王经理电话18362895271', '2016-05-19', '2016-06-30', '1', '入侵报警技术团队', '2016-05-19');
INSERT INTO `m_notice` VALUES ('4', '测试公告', '此公告为测试', '测试增加功能，阿福福福黑咕隆咚还是，飞虎队推荐大家都很大方，烦得很设计时尚风格和司法解释就是房价升高会受到很大觉得他也觉得还是嘎哈岁of更是一度超过YVUs对此！！！', '2016-05-28', '2016-06-29', '1', '入侵报警运营项目团队', '2016-05-28');
INSERT INTO `m_notice` VALUES ('5', '六一节活动', '本报警系统也来一个节日活动', '六一节活动期间，我们将开展一系列活动，活动期间有精美礼物送出。具体活动内容请访问官网www.justjust.com', '2016-05-20', '2016-06-30', '1', '入侵报警经营团队', '2016-05-20');
INSERT INTO `m_notice` VALUES ('6', '系统升级公告', '系统升级至1.2.0', '2016年6月1号早上8点至早上11点，我们将对系统进行版本升级，届时不能提供实时报警服务，敬请谅解', '2016-05-30', '2016-06-10', '1', '入侵报警技术团队', '2016-05-12');

-- ----------------------------
-- Table structure for `m_question`
-- ----------------------------
DROP TABLE IF EXISTS `m_question`;
CREATE TABLE `m_question` (
  `r_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '反馈id',
  `u_id` int(8) NOT NULL COMMENT '用户id',
  `u_title` varchar(140) NOT NULL COMMENT '问题标题',
  `u_question` varchar(140) NOT NULL COMMENT '问题详述',
  `r_answer` varchar(140) DEFAULT '' COMMENT '管理员回答',
  `r_flag` char(1) NOT NULL DEFAULT '2' COMMENT '回复类型   0代表普通回复，1代表系统重要提醒,2代表还未回复',
  `r_responser` varchar(50) DEFAULT NULL COMMENT '回答者',
  `r_date` date NOT NULL COMMENT '日期',
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_question
-- ----------------------------
INSERT INTO `m_question` VALUES ('1', '1', '关于如何使用系统的疑问', '请问这个系统怎么用啊，视频能及时传过来吗？', '您好，我们这个系统使用很简单的，达成协议后可以及时获得报警信息，视频是实时传输的，您可以在第一时间查看你的报警视频，也可以 在事后查看视频记录，我们会把视频信息存在服务器上，方便您随时查看。具体操作可见网页详情。祝您生活愉快！', '0', '官方回复', '2016-05-19');
INSERT INTO `m_question` VALUES ('2', '1', '看不了视频的问题', '用手机看视频全屏模式下不能观看，bug6的飞起', '这个问题是由于手机破，你个傻吊不会用版本高的手机啊，用个诺基亚看个叼', '0', '官方回复', '2016-05-11');
INSERT INTO `m_question` VALUES ('3', '1', '系统提醒', '系统提示', '尊敬的用户，您该充值了！', '1', '系统提示', '2016-05-18');
INSERT INTO `m_question` VALUES ('4', '1', '测试', '测试反馈信息', '呵呵，醉了', '0', '官方回复', '2016-05-19');
INSERT INTO `m_question` VALUES ('5', '1', '测试2', '提示信息', '古古怪怪', '0', '测试员', '2016-05-19');
INSERT INTO `m_question` VALUES ('10', '1', '马赛克', '哈哈哈哈哈哈哈', null, '2', null, '2016-05-19');
INSERT INTO `m_question` VALUES ('11', '1', '呵呵哒', '8888', null, '2', null, '2016-05-20');
INSERT INTO `m_question` VALUES ('12', '2', '系统提醒', '故障提醒', '报警视频上传失败，请检查您的检测客户端', '1', '系统', '2016-05-31');
INSERT INTO `m_question` VALUES ('13', '1', '视频格式问题', '视频打不开？？？', '', '2', null, '2016-06-02');
INSERT INTO `m_question` VALUES ('14', '1', '视频不能下载', '点击视频下载无反应。。。', '', '2', null, '2016-06-09');

-- ----------------------------
-- Table structure for `m_user`
-- ----------------------------
DROP TABLE IF EXISTS `m_user`;
CREATE TABLE `m_user` (
  `u_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `u_realName` varchar(30) NOT NULL COMMENT '真实姓名',
  `u_name` varchar(30) NOT NULL COMMENT '用户名',
  `u_password` varchar(30) NOT NULL COMMENT '密码',
  `u_phone` varchar(11) NOT NULL COMMENT '手机号码',
  `u_mail` varchar(30) DEFAULT NULL COMMENT '邮箱',
  `u_desc` varchar(140) DEFAULT '' COMMENT '留言',
  `u_location` varchar(140) NOT NULL COMMENT '地点',
  `u_loginTime` datetime DEFAULT NULL COMMENT '登录时间',
  `u_loginCount` int(11) NOT NULL DEFAULT '0' COMMENT '登录次数',
  `u_checked` char(1) NOT NULL DEFAULT '1' COMMENT '用户审核状态，1为未审核，0为已审核，2为拒绝',
  `u_hasflag` char(1) DEFAULT '1' COMMENT '是否被标记，0为是，1为否',
  `u_flagReason` varchar(1024) DEFAULT NULL COMMENT '标记原因',
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_user
-- ----------------------------
INSERT INTO `m_user` VALUES ('1', '测试用户', 'just', '123456', '18112821111', '4986451@qq.com', null, '江苏徐州', '2016-07-13 16:49:13', '74', '0', '0', '666');
INSERT INTO `m_user` VALUES ('2', '张三', 'zs1993', '123456', '18011111111', 'fdafsgg@sda.com', '我是张三啊', '南京', '2016-05-25 19:14:07', '1', '0', '0', '大客户');
INSERT INTO `m_user` VALUES ('3', '李四', 'ls222', '123456', '18888888888', 'dasd@vv.com', '', '江苏南京', '2016-05-25 00:17:07', '1', '0', '1', null);
INSERT INTO `m_user` VALUES ('5', '疯子', 'dfs', '123456', '18200000000', 'afqe@qq.com', '呵呵哒', '江苏徐州', null, '0', '1', '1', null);
INSERT INTO `m_user` VALUES ('6', '供膳宿', 'gsgsfgs', '123456', '18211111111', '21435232@qq.com', '', '江苏镇江', null, '0', '1', '1', null);
INSERT INTO `m_user` VALUES ('7', '是个死人', 'aeed', '123456', '18222222222', 'fa@fa.com', '个三分', '山东枣庄', null, '0', '1', '1', null);
INSERT INTO `m_user` VALUES ('8', '更让人', 'fa', '123456', '18233333333', 'gdsfs@af.com', '', '江苏镇江', null, '0', '1', '1', null);
INSERT INTO `m_user` VALUES ('9', '嘿嘿嘿', 'hhh', '123456', '18244444444', 'fafa@ada.com', '', '北京市', null, '0', '1', '1', null);
INSERT INTO `m_user` VALUES ('10', '活动', 'gsgsr', '123456', '18133333333', 'fsfs@sss.com', '', '北京市', '2016-05-29 22:28:24', '1', '0', '1', '');
INSERT INTO `m_user` VALUES ('11', '蝴蝶结发夹', 'sda4123', '123456', '18144444444', 'sfs@eee.com', '', '天津市', null, '0', '1', '1', null);
INSERT INTO `m_user` VALUES ('13', '大哥', 'dg111', '123456', '18166666666', 'dg@just.cn', '', '江苏镇江', '2016-05-24 22:29:16', '1', '0', '0', '大哥');
INSERT INTO `m_user` VALUES ('14', '幅度很大', 'fgd', '123456', '18177777777', 'fjvk@mm.com', '', '海南三亚', '2016-05-10 22:30:01', '1', '0', '1', '');
INSERT INTO `m_user` VALUES ('15', '风格', 'just2', '123456', '18033333333', 'fagags@qq.com', '', '江苏镇江', null, '0', '1', '1', null);

-- ----------------------------
-- Table structure for `m_user_upcheck`
-- ----------------------------
DROP TABLE IF EXISTS `m_user_upcheck`;
CREATE TABLE `m_user_upcheck` (
  `up_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '序号',
  `u_id` int(8) NOT NULL COMMENT '用户id',
  `u_name` varchar(30) NOT NULL COMMENT '用户名',
  `up_realName` varchar(30) NOT NULL COMMENT '真实姓名',
  `up_phone` varchar(11) NOT NULL COMMENT '手机号码',
  `up_mail` varchar(30) DEFAULT '' COMMENT '邮箱',
  `up_location` varchar(140) NOT NULL COMMENT '地点',
  `up_checked` char(1) DEFAULT NULL COMMENT '用户更改信息审核，1为未审核，0为已审核，2为拒绝,空为没有过更新操作',
  PRIMARY KEY (`up_id`,`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of m_user_upcheck
-- ----------------------------
INSERT INTO `m_user_upcheck` VALUES ('5', '1', 'just', '测试用户', '18112821111', '4986451@qq.com', '江苏徐州', '1');
INSERT INTO `m_user_upcheck` VALUES ('6', '2', 'zs1993', '张三', '18122222222', 'fdafsgg@sda.com', '江苏徐州', '1');
