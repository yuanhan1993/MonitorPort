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
public class GetSearchCountQuestionController {
	@Resource
  private QuestionService questionService;
	@RequestMapping("/getsearchcount.do")
	@ResponseBody
  public MessageResult execute(
			String r_id, String u_title, String r_flag){
	  MessageResult result=questionService.getSearchCount( r_id, u_title, r_flag);
	  return result;
  }
}
