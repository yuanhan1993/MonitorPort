package com.monitorport.dao;

import java.util.Date;
import java.util.List;

import com.monitorport.entity.Notice;
import com.monitorport.entity.Page;

public interface NoticeDao {

public List<Notice> showNotice(Page page);//显示所有公告信息
public Notice findNoticeById(String n_id);//根据id查询信息
public int getNoticeCount(Page page);//公告数目
public int updateNotice(Notice notice);//更新
public int delNotice(String u_id);//删除公告
public int addNotice(Notice notice);//增加公告
}
