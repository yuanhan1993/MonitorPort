package com.monitorport.service;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.RowBounds;
import org.springframework.stereotype.Service;

import com.monitorport.dao.MessageDao;
import com.monitorport.entity.Message;
import com.monitorport.entity.MessageResult;
import com.monitorport.entity.Page;
@Service
public class MessageServiceImpl implements MessageService{
	@Resource
    private MessageDao msgDao;
	public MessageResult addMessage(String m_time, String m_msg,Integer u_id,String m_location,String m_result) {
		MessageResult result=new MessageResult();
		Message message=new Message();
		//检查是否已经添加过
		List<Message> hasmessages=msgDao.searchAll(u_id.toString());
		for(Message hasmessage:hasmessages){
			System.out.println(hasmessage.getM_location());
			if(m_location.equals(hasmessage.getM_location())&&m_time.equals(hasmessage.getM_time())&&m_msg.equals(hasmessage.getM_msg())){
				result.setState(1);
				result.setMsg("已添加过此信息");
				return result;
			}
			
		}
		
		message.setM_msg(m_msg);
		message.setM_time(m_time);
		message.setU_id(u_id);
		if("".equals(m_result)){
			message.setM_status(0);
		}else{
			message.setM_status(1);
		}
		
		message.setM_location(m_location);
		message.setM_result(m_result);
		//打桩
		//System.out.println(message.toString());
		msgDao.save(message);
	
		result.setState(0);
		result.setMsg("添加成功！");
		//result.setData()
		return result; 
		
	}
	public MessageResult showMessage(int currentPage,int pageSize,String u_id,String m_location,String beginDate,String endDate,String m_status) {
		MessageResult result=new MessageResult();
		Page page=new Page();
		page.setCurrentPage(currentPage);
		page.setU_id(u_id);
		page.setBeginDate(beginDate);
		page.setEndDate(endDate);
		page.setM_location(m_location);
		page.setM_status(m_status);
		page.setPageSize(pageSize);
		page.setTotalCount(msgDao.getCount(page));
		List<Message> list=msgDao.showAll(page);
		result.setState(0);
		result.setMsg("查询成功");
		result.setData(list);
		result.setPage(page);
		return result;
	}
	public MessageResult deleteMessage(String m_id) {
		MessageResult result=new MessageResult();
		msgDao.deleteMessage(m_id);
		result.setState(0);
		result.setMsg("删除成功");
		return result;
	}
	public MessageResult updateMessage(String m_id,String u_id, String m_location,
			String m_time, String m_msg, String m_result) {
		MessageResult result=new MessageResult();
		Message m=new Message();
		m.setM_id(Integer.parseInt(m_id));
		m.setU_id(Integer.parseInt(u_id));
		m.setM_time(m_time);
		m.setM_location(m_location);
		m.setM_msg(m_msg);
		m.setM_result(m_result);
		if("".equals(m_result)){
			m.setM_status(0);
		}else{
			m.setM_status(1);
		}
		msgDao.updateMessage(m);
		result.setState(0);
		result.setMsg("更新成功");
		return result;
	}
	public MessageResult dealMessage(String m_id, String m_result) {
		MessageResult result=new MessageResult();
		Message message=new Message();
		message.setM_id(Integer.parseInt(m_id));
		message.setM_result(m_result);
		msgDao.dealMessage(message);
		result.setState(0);
		result.setMsg("处理完毕");
		return result;
	}
	public MessageResult findMessageById(String m_id) {
		MessageResult result=new MessageResult();
		Message message=msgDao.findById(m_id);
		result.setState(0);
		result.setMsg("已查询出来");
		result.setData(message);
		return result;
	}
	public MessageResult getMsgCount(String u_id,
			String m_location, String beginDate, String endDate, String m_status) {
		MessageResult result=new MessageResult();
		Page page=new Page();
		page.setU_id(u_id);
		page.setBeginDate(beginDate);
		page.setEndDate(endDate);
		page.setM_location(m_location);
		page.setM_status(m_status);
		int totalNum=msgDao.getCount(page);
		result.setState(0);
		result.setData(totalNum);
		return result;
	}
}
