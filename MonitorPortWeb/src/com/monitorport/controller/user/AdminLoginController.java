package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/admin")
public class AdminLoginController {
	@Resource
  private UserService userService;
	@RequestMapping("/login.do")
	@ResponseBody
  public MessageResult execute(String a_username,String a_password){
	  MessageResult result=userService.checkAdmin(a_username, a_password);
	  return result;
  }
}
