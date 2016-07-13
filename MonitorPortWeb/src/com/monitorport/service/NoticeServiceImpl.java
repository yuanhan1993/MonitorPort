package com.monitorport.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.monitorport.dao.NoticeDao;
import com.monitorport.entity.MessageResult;
import com.monitorport.entity.Notice;
import com.monitorport.entity.Page;
@Service
public class NoticeServiceImpl implements NoticeService{
	@Resource
    private NoticeDao noticeDao;
	public MessageResult showNotice(String currentPage,String pageSize,String n_flag) {
		MessageResult result=new MessageResult();
		//暂时不做只在时间内范围显示的功能，所有公告都显示
		//Date date=new Date();
		//SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		//String nowDate=sdf.format(date);
		
		Page page=new Page();
		//page.setNowDate(nowDate);
		page.setCurrentPage(Integer.parseInt(currentPage));
		page.setPageSize(Integer.parseInt(pageSize));
		page.setN_flag(n_flag);
		int count=noticeDao.getNoticeCount(page);
		page.setTotalCount(count);
		List<Notice> notices=noticeDao.showNotice(page);
		result.setData(notices);
		result.setState(0);
		return result;
	}
	public MessageResult findNoticeById(String n_id) {
		MessageResult result=new MessageResult();
		Notice notice=noticeDao.findNoticeById(n_id);
		result.setData(notice);
		result.setState(0);
		return result;
	}
	public MessageResult getNoticeCount(String n_flag,String n_title) {
		MessageResult result=new MessageResult();
		Date date=new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		String nowDate=sdf.format(date);
		Page page=new Page();
		page.setNowDate(nowDate);
		page.setN_flag(n_flag);
		page.setN_title(n_title);
		int count=noticeDao.getNoticeCount(page);
		result.setData(count);
		result.setState(0);
		return result;
	}
	
	public MessageResult getNoticeAdminCount(String n_flag,String n_title) {
		MessageResult result=new MessageResult();
		Page page=new Page();
		page.setN_flag(n_flag);
		page.setN_flag(n_title);
		int count=noticeDao.getNoticeCount(page);
		result.setData(count);
		result.setState(0);
		return result;
	}
	public MessageResult searchNotice(String currentPage,String pageSize,String n_flag,String n_title) {
		MessageResult result=new MessageResult();
		Page page=new Page();
		page.setCurrentPage(Integer.parseInt(currentPage));
		page.setPageSize(Integer.parseInt(pageSize));
		page.setN_flag(n_flag);
		page.setN_title(n_title);
		int count=noticeDao.getNoticeCount(page);
		page.setTotalCount(count);
		List<Notice> notices=noticeDao.showNotice(page);
		if(notices.size()>0){
			result.setData(notices);
			result.setPage(page);
			result.setState(0);
			return result;
		}else{
			result.setState(1);
			return result;
		}
		
	}
	public MessageResult updateNotice(String n_id, String n_title,
			String n_shortContent, String n_content, Date n_startDate,
			Date n_endDate, Date n_publishDate, String n_publisher,
			String n_flag) {
		MessageResult result=new MessageResult();
		Notice notice=new Notice();
		notice.setN_content(n_content);
		notice.setN_endDate(n_endDate);
		notice.setN_flag(n_flag);
		notice.setN_id(Integer.parseInt(n_id));
		notice.setN_publishDate(n_publishDate);
		notice.setN_publisher(n_publisher);
		notice.setN_shortContent(n_shortContent);
		notice.setN_startDate(n_startDate);
		notice.setN_title(n_title);
		int count=noticeDao.updateNotice(notice);
		if(count>0){
			result.setState(0);
		}else{
			result.setState(1);
		}
		return result;
	}
	public MessageResult deleteNotice(String n_id) {
		MessageResult result=new MessageResult();
		int count=noticeDao.delNotice(n_id);
		if(count>0){
			result.setState(0);
		}else{
			result.setState(1);
		}
		return result;
	}
	public MessageResult addNewNotice( String n_title,
			String n_shortContent, String n_content, Date n_startDate,
			Date n_endDate, Date n_publishDate, String n_publisher,
			String n_flag) {
		MessageResult result=new MessageResult();
		Notice notice=new Notice();
		notice.setN_content(n_content);
		notice.setN_endDate(n_endDate);
		notice.setN_flag(n_flag);
		notice.setN_publishDate(n_publishDate);
		notice.setN_publisher(n_publisher);
		notice.setN_shortContent(n_shortContent);
		notice.setN_startDate(n_startDate);
		notice.setN_title(n_title);
		int count=noticeDao.addNotice(notice);
		if(count>0){
			result.setState(0);
		}else{
			result.setState(1);
		}
		return result;
	}
}
