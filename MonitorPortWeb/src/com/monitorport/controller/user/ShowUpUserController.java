package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/user")
public class ShowUpUserController {
	@Resource
  private UserService userService;
	@RequestMapping("/showupd.do")
	@ResponseBody
  public MessageResult execute(String currentPage,String pageSize){
	  MessageResult result=userService.showUpUser(currentPage, pageSize);
	  return result;
  }
}
