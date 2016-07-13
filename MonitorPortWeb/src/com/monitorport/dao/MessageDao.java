package com.monitorport.dao;

import java.util.List;

import com.monitorport.entity.Message;
import com.monitorport.entity.Page;

public interface MessageDao {
 //������������Ϣ	
 public void save(Message msg);
 //��ѯ��Ϣ������
 public int getCount(Page page);
 //��ʾ������Ϣ
 public List<Message> showAll(Page page);
 //����ID������Ϣ
 public Message findById(String m_id);
 //ɾ����ѡ��Ϣ
 public int deleteMessage(String m_id);
 //������ѡ��Ϣ
 public int updateMessage(Message mesage);
 //�����¼�
 public int dealMessage(Message message);
 //����������Ϣ�������ж��Ƿ��Ѿ�����
 public List<Message> searchAll(String u_id);
}
