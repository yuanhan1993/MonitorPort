package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/user")
public class DelUserController {
	@Resource
  private UserService userService;
	@RequestMapping("/deluser.do")
	@ResponseBody
  public MessageResult execute(String u_id){
	  MessageResult result=userService.deleteUser(u_id);
	  return result;
  }
}
