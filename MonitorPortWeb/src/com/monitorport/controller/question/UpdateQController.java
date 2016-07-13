package com.monitorport.controller.question;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.Resource;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.MessageService;
import com.monitorport.service.QuestionService;

@Controller
@RequestMapping("/question")
public class UpdateQController {
	@Resource
 private QuestionService questionService;
	@RequestMapping("/updateq.do")
	@ResponseBody
	public MessageResult execute(String r_id,String r_answer,String r_responser,String r_flag){
		MessageResult result=questionService.updateQuestion(r_answer, r_responser, r_id,r_flag);
		return result;
	}
}
