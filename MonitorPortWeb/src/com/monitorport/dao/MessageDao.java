package com.monitorport.dao;

import java.util.List;

import com.monitorport.entity.Message;
import com.monitorport.entity.Page;

public interface MessageDao {
 //保存新增的信息	
 public void save(Message msg);
 //查询信息的总数
 public int getCount(Page page);
 //显示所有信息
 public List<Message> showAll(Page page);
 //根据ID查找信息
 public Message findById(String m_id);
 //删除所选信息
 public int deleteMessage(String m_id);
 //更新所选信息
 public int updateMessage(Message mesage);
 //处理事件
 public int dealMessage(Message message);
 //查找所有信息，用来判断是否已经存在
 public List<Message> searchAll(String u_id);
}
