package com.monitorport.controller.message;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.MessageService;
@Controller
@RequestMapping("/message")
public class AddMessageController {
	@Resource
  private MessageService messageService;
	@RequestMapping("/addMessage.do")
	@ResponseBody
  public MessageResult execute(String m_time,String m_msg,Integer u_id,String m_location,String m_result){
	  MessageResult result=messageService.addMessage(m_time, m_msg,u_id,m_location,m_result);
	  return result;
  }
}
