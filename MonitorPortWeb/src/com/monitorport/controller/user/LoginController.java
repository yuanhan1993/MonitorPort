package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/user")
public class LoginController {
	@Resource
  private UserService userService;
	@RequestMapping("/login.do")
	@ResponseBody
  public MessageResult execute(String u_name,String u_password){
	  MessageResult result=userService.checkLogin(u_name, u_password);
	  return result;
  }
}
