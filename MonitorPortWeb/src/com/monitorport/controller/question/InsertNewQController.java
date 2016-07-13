package com.monitorport.controller.question;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.MessageService;
import com.monitorport.service.QuestionService;

@Controller
@RequestMapping("/question")
public class InsertNewQController {
	@Resource
 private QuestionService questionService;
	@RequestMapping("/insertq.do")
	@ResponseBody
	public MessageResult execute(String u_id,String u_title,String u_question,Date r_date){
		MessageResult result=questionService.insertNewQuestion(u_id, u_title, u_question, r_date);
		return result;
	}
}
