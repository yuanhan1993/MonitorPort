package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/user")
public class ShowUserController {
	@Resource
  private UserService userService;
	@RequestMapping("/show.do")
	@ResponseBody
  public MessageResult execute(String currentPage,String pageSize,String u_id,String u_checked,String u_location,String u_phone,String u_realName,String u_hasflag){
	  MessageResult result=userService.showUser(currentPage, pageSize, u_id, u_checked,u_location,u_phone,u_realName,u_hasflag);
	  return result;
  }
}
