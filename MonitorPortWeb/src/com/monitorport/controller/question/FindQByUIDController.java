package com.monitorport.controller.question;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.MessageService;
import com.monitorport.service.QuestionService;

@Controller
@RequestMapping("/question")
public class FindQByUIDController {
	@Resource
 private QuestionService questionService;
	@RequestMapping("/findbyuid.do")
	@ResponseBody
	public MessageResult execute(String u_id,String currentPage,String pageSize){
		MessageResult result=questionService.findQuestionByUID(u_id,currentPage,pageSize);
		return result;
	}
}
