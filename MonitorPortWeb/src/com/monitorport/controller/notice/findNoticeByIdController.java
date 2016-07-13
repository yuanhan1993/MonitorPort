package com.monitorport.controller.notice;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.NoticeService;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/notice")
public class findNoticeByIdController {
	@Resource
  private NoticeService noticeService;
	@RequestMapping("/findbyid.do")
	@ResponseBody
  public MessageResult execute(String n_id){
	  MessageResult result=noticeService.findNoticeById(n_id);
	  return result;
  }
}
