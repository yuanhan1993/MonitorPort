package com.monitorport.service;

import java.util.Date;

import com.monitorport.entity.MessageResult;
/**
 * 处理公告信息
 * @author yh
 *
 */
public interface NoticeService {
public MessageResult showNotice(String currentPage,String pageSize,String n_flag);
public MessageResult findNoticeById(String n_id);
public MessageResult getNoticeCount(String n_flag,String n_title);
public MessageResult searchNotice(String currentPage,String pageSize,String n_flag,String n_title);
public MessageResult getNoticeAdminCount(String n_flag,String n_title);
public MessageResult updateNotice(String n_id,String n_title,String n_shortContent,String n_content,
		  Date n_startDate,Date n_endDate,Date n_publishDate,String n_publisher,String n_flag);
public MessageResult deleteNotice(String n_id);
public MessageResult addNewNotice(String n_title,String n_shortContent,String n_content,
		  Date n_startDate,Date n_endDate,Date n_publishDate,String n_publisher,String n_flag);
}
