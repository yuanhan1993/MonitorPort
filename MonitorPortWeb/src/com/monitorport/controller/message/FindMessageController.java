package com.monitorport.controller.message;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.MessageService;

@Controller
@RequestMapping("/message")
public class FindMessageController {
	@Resource
 private MessageService messageService;
	@RequestMapping("/find.do")
	@ResponseBody
	public MessageResult execute(String m_id){
		MessageResult result=messageService.findMessageById(m_id);
		return result;
	}
}
