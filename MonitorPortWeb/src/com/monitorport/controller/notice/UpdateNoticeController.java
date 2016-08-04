package com.monitorport.controller.notice;

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
import com.monitorport.service.NoticeService;
import com.monitorport.service.UserService;
@Controller
@RequestMapping("/notice")
public class UpdateNoticeController {
	@Resource
  private NoticeService noticeService;
	@RequestMapping("/updatenotice.do")
	@ResponseBody
  public MessageResult execute(String n_id,String n_title,String n_shortContent,String n_content,
		  Date n_startDate,Date n_endDate,Date n_publishDate,String n_publisher,String n_flag){
	  MessageResult result=noticeService.updateNotice(n_id, n_title, n_shortContent, n_content, n_startDate, n_endDate, n_publishDate, n_publisher, n_flag);
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
