package com.monitorport.dao;

import java.util.Date;
import java.util.List;

import com.monitorport.entity.Notice;
import com.monitorport.entity.Page;

public interface NoticeDao {

public List<Notice> showNotice(Page page);//��ʾ���й�����Ϣ
public Notice findNoticeById(String n_id);//����id��ѯ��Ϣ
public int getNoticeCount(Page page);//������Ŀ
public int updateNotice(Notice notice);//����
public int delNotice(String u_id);//ɾ������
public int addNotice(Notice notice);//���ӹ���
}
