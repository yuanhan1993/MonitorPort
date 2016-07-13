package com.monitorport.controller.message;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.MessageService;
@Controller
@RequestMapping("/message")
public class ShowMessageController {
	@Resource
 private MessageService messageService;
	@RequestMapping("/show.do")
	@ResponseBody
 public MessageResult execute(int currentPage,int pageSize,String u_id,String m_location,String beginDate,String endDate,String m_status){
	 MessageResult result=messageService.showMessage(currentPage,pageSize,u_id, m_location, beginDate, endDate,m_status);
	 return result;
 }
}
