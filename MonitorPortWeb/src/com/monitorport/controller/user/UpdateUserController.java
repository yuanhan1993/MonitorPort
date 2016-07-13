package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/user")
public class UpdateUserController {
	@Resource
  private UserService userService;
	@RequestMapping("/upUser.do")
	@ResponseBody
  public MessageResult execute(String u_realName,String u_password,String u_location,String u_phone,String u_mail,String u_upchecked,String u_id,String u_name){
	  MessageResult result=userService.updateUser(u_realName, u_password, u_location, u_phone, u_mail, u_upchecked,u_id,u_name);
	  return result;
  }
}
