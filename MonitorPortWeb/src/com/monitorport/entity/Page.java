package com.monitorport.entity;

import java.util.Date;

public class Page {
    private int pageSize;//每页显示页数
	
	private int startNum; //开始数字
	
	public void setStartNum(int startNum) {
		this.startNum = startNum;
	}

	private int totalCount; //总数目

	private int totalPage;//总页数
	
	private int currentPage;//当前页
    
	private String u_id; 
	private String m_location;
	private String beginDate;
	private String endDate;
	private String m_status;
	private String nowDate;
	private String u_checked;
	private String u_location;
	private String u_realName;
	private String u_phone;
	private String u_hasflag;
	private String n_title;
	private String n_flag;
	private String u_title;
	private String r_flag;
	private String r_id;
	public String getR_id() {
		return r_id;
	}

	public void setR_id(String r_id) {
		this.r_id = r_id;
	}

	public String getU_title() {
		return u_title;
	}

	public void setU_title(String u_title) {
		this.u_title = u_title;
	}

	public String getR_flag() {
		return r_flag;
	}

	public void setR_flag(String r_flag) {
		this.r_flag = r_flag;
	}

	public String getN_title() {
		return n_title;
	}

	public void setN_title(String n_title) {
		this.n_title = n_title;
	}

	public String getN_flag() {
		return n_flag;
	}

	public void setN_flag(String n_flag) {
		this.n_flag = n_flag;
	}

	public String getU_hasflag() {
		return u_hasflag;
	}

	public void setU_hasflag(String u_hasflag) {
		this.u_hasflag = u_hasflag;
	}

	public String getU_location() {
		return u_location;
	}

	public void setU_location(String u_location) {
		this.u_location = u_location;
	}

	public String getU_realName() {
		return u_realName;
	}

	public void setU_realName(String u_realName) {
		this.u_realName = u_realName;
	}

	public String getU_phone() {
		return u_phone;
	}

	public void setU_phone(String u_phone) {
		this.u_phone = u_phone;
	}

	public String getU_checked() {
		return u_checked;
	}

	public void setU_checked(String u_checked) {
		this.u_checked = u_checked;
	}

	public String getNowDate() {
		return nowDate;
	}

	public void setNowDate(String nowDate) {
		this.nowDate = nowDate;
	}

	public String getM_status() {
		return m_status;
	}

	public void setM_status(String m_status) {
		this.m_status = m_status;
	}

	public String getM_location() {
		return m_location;
	}

	public void setM_location(String m_location) {
		this.m_location = m_location;
	}

	public String getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getU_id() {
		return u_id;
	}

	public void setU_id(String u_id) {
		this.u_id = u_id;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getTotalCount() {
		return totalCount;
	}


    public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	
	
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getTotalPage() {
		if(pageSize!=0){
			if (totalCount % this.pageSize == 0) {
				this.totalPage = totalCount / this.pageSize;
			} else {
				this.totalPage = totalCount / this.pageSize + 1;
			}
		}
		
		return this.totalPage;
	}

	public int getStartNum(){
		if (currentPage>getTotalPage()){
			currentPage=getTotalPage();
		}	
		return (currentPage-1)*pageSize;
		
	}
	
}
