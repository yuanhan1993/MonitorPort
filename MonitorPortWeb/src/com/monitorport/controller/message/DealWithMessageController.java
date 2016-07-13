package com.monitorport.controller.message;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.monitorport.entity.MessageResult;
import com.monitorport.service.MessageService;
@Controller
@RequestMapping("/message")
public class DealWithMessageController {
	@Resource
	private MessageService messageService;
	@RequestMapping("/deal.do")
	@ResponseBody
	public MessageResult execute(String m_id,String m_result){
		MessageResult result=messageService.dealMessage(m_id, m_result);
		return result;
	}
}
