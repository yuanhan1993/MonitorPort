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
public class showNoticeController {
	@Resource
  private NoticeService noticeService;
	@RequestMapping("/show.do")
	@ResponseBody
  public MessageResult execute(String currentPage,String pageSize,String n_flag){
	  MessageResult result=noticeService.showNotice(currentPage,pageSize,n_flag);
	  return result;
  }
}
