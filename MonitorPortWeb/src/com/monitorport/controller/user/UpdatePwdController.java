package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/user")
public class UpdatePwdController {
	@Resource
  private UserService userService;
	@RequestMapping("/upPwd.do")
	@ResponseBody
  public MessageResult execute(String u_id,String old_pwd,String new_pwd){
	  MessageResult result=userService.updatePwd(u_id, old_pwd,new_pwd);
	  return result;
  }
}
