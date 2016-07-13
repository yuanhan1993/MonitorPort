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
public class FindQByRIDController {
	@Resource
 private QuestionService questionService;
	@RequestMapping("/findbyrid.do")
	@ResponseBody
	public MessageResult execute(String r_id){
		MessageResult result=questionService.findQuestionByRID(r_id);
		return result;
	}
}
