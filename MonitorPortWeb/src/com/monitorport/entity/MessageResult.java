package com.monitorport.entity;

import java.io.Serializable;

public class MessageResult implements Serializable{
	private int state;//状态״̬
	private String msg;//信息
	private Object data;//数据
	private Page page; //页的信息
	public Page getPage() {
		return page;
	}
	public void setPage(Page page) {
		this.page = page;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	/*
	public Page getPage() {
		return page;
	}
	public void setPage(Page page) {
		this.page = page;
	}
	*/
	
	
}
