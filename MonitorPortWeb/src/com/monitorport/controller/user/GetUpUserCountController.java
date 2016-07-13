package com.monitorport.controller.user;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.MessageService;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/user")
public class GetUpUserCountController {
	@Resource
 private UserService userService;
	@RequestMapping("/getupcount.do")
	@ResponseBody
 public MessageResult execute(){
	 MessageResult result=userService.getUpCount();
	 return result;
 }
}
