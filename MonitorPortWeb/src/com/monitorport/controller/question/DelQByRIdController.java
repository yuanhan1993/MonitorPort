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
public class DelQByRIdController {
	@Resource
 private QuestionService questionService;
	@RequestMapping("/delQuestion.do")
	@ResponseBody
	public MessageResult execute(String r_id){
		MessageResult result=questionService.deleteQuestion(r_id);
		return result;
	}
}
