package com.monitorport.service;
import com.monitorport.entity.MessageResult;
/**
 * 处理报警信息
 * @author yh
 *
 */
public interface MessageService {
 public MessageResult addMessage(String m_time,String m_msg,Integer u_id,String m_location,String m_result);
 public MessageResult showMessage(int currentPage,int pageSize,String u_id,String m_location,String beginDate,String endDate,String m_status);
 public MessageResult findMessageById(String m_id);
 public MessageResult deleteMessage(String m_id);
 public MessageResult updateMessage(String m_id,String u_id,String m_location,String m_time,String m_msg,String m_result);
 public MessageResult dealMessage(String m_id,String m_result);
 public MessageResult getMsgCount(String u_id,String m_location,String beginDate,String endDate,String m_status);
}
