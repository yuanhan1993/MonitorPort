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
public class showQuestionController {
	@Resource
 private QuestionService questionService;
	@RequestMapping("/showquestion.do")
	@ResponseBody
	public MessageResult execute(String currentPage, String pageSize,
			String r_id, String u_title, String r_flag){
		MessageResult result=questionService.showQuestion(currentPage, pageSize, r_id, u_title, r_flag);
		return result;
	}
}
