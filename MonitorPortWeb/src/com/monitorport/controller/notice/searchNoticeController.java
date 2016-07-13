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
public class searchNoticeController {
	@Resource
  private NoticeService noticeService;
	@RequestMapping("/search.do")
	@ResponseBody
  public MessageResult execute(String currentPage,String pageSize,String n_flag,String n_title){
	  MessageResult result=noticeService.searchNotice(currentPage, pageSize, n_flag, n_title);
	  return result;
  }
}
