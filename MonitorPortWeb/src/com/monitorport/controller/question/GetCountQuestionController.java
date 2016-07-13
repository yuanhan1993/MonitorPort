package com.monitorport.controller.question;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.NoticeService;
import com.monitorport.service.QuestionService;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/question")
public class GetCountQuestionController {
	@Resource
  private QuestionService questionService;
	@RequestMapping("/getcount.do")
	@ResponseBody
  public MessageResult execute(String u_id){
	  MessageResult result=questionService.getCountForQuestion(u_id);
	  return result;
  }
}
