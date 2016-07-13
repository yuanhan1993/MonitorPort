package com.monitorport.entity;
/**
 * 公告发布实体类
 */
import java.util.Date;

public class Notice {
private int n_id;  //公告id
private String n_title;//公告标题
private String n_shortContent;//公告简介
private String n_content;//公告内容
private Date n_startDate;//开始时间
private Date n_endDate;//结束时间
private Date n_publishDate;//发布时间
private String n_publisher;//发布者
private String n_flag; //标记 ，0为未发布，1为已发布
public int getN_id() {
	return n_id;
}
public void setN_id(int n_id) {
	this.n_id = n_id;
}
public String getN_title() {
	return n_title;
}
public void setN_title(String n_title) {
	this.n_title = n_title;
}
public String getN_shortContent() {
	return n_shortContent;
}
public void setN_shortContent(String n_shortContent) {
	this.n_shortContent = n_shortContent;
}
public String getN_content() {
	return n_content;
}
public void setN_content(String n_content) {
	this.n_content = n_content;
}
public Date getN_startDate() {
	return n_startDate;
}
public void setN_startDate(Date n_startDate) {
	this.n_startDate = n_startDate;
}
public Date getN_endDate() {
	return n_endDate;
}
public void setN_endDate(Date n_endDate) {
	this.n_endDate = n_endDate;
}
public Date getN_publishDate() {
	return n_publishDate;
}
public void setN_publishDate(Date n_publishDate) {
	this.n_publishDate = n_publishDate;
}
public String getN_publisher() {
	return n_publisher;
}
public void setN_publisher(String n_publisher) {
	this.n_publisher = n_publisher;
}
public String getN_flag() {
	return n_flag;
}
public void setN_flag(String n_flag) {
	this.n_flag = n_flag;
}

}
