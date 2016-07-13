package com.monitorport.controller.message;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.MessageService;
@Controller
@RequestMapping("/message")
public class UpdateMessageController {
	@Resource
	private MessageService messageService;
	@RequestMapping("/update.do")
	@ResponseBody
	public MessageResult execute(String m_id,String u_id, String m_location,
			String m_time, String m_msg, String m_result){
		MessageResult result=messageService.updateMessage(m_id, u_id, m_location, m_time, m_msg, m_result);
		return result;
	}
}
