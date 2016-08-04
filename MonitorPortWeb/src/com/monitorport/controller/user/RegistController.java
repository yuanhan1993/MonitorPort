package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
/**
 * 用户注册
 * @author yh
 *
 */
@Controller
@RequestMapping("/user")
public class RegistController {
	@Resource
private UserService userService;
	@RequestMapping("/regist.do")
	@ResponseBody
public MessageResult execute(String u_name,String u_password,String u_phone,String u_mail,String u_desc,String u_location,String u_realName){
	MessageResult result=userService.regist(u_name, u_password, u_phone, u_mail, u_desc,u_location,u_realName);
	return result;
}
}
