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
public class AddSystemQController {
	@Resource
 private QuestionService questionService;
	@RequestMapping("/addsysq.do")
	@ResponseBody
	public MessageResult execute(String u_id,String u_title,String u_question,String r_answer,
			String r_flag,String r_responser,Date r_date){
		MessageResult result=questionService.addSystemQuestion(u_id, u_title, u_question, r_answer, r_flag, r_responser, r_date);
		return result;
	}
	//解决日期格式问题，如果不加会出现400错误
		@InitBinder  
		public void initBinder(WebDataBinder binder) {  
		    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");  
		    dateFormat.setLenient(false);  
		    binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
	}
}
