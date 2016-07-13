package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/user")
public class InsertFlagController {
	@Resource
  private UserService userService;
	@RequestMapping("/insertflag.do")
	@ResponseBody
  public MessageResult execute(String u_id, String u_hasflag,
			String u_flagReason){
	  MessageResult result=userService.insertUserFlag(u_id, u_hasflag, u_flagReason);
	  return result;
  }
}
