package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/user")
public class AgreeUserController {
	@Resource
  private UserService userService;
	@RequestMapping("/agreeadd.do")
	@ResponseBody
  public MessageResult execute(String u_id){
	  MessageResult result=userService.agreeAddUser(u_id);
	  return result;
  }
}
