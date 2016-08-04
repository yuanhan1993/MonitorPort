package com.monitorport.entity;

import java.util.Date;

public class Question {
private int r_id; //序号
private int u_id; //用户id
private String u_title; //问题标题
private String u_question; //问题详情
private String r_answer; //回答
private String r_flag; //标记
private String r_responser; //回答者
private Date r_date; //日期
public Date getR_date() {
	return r_date;
}
public void setR_date(Date r_date) {
	this.r_date = r_date;
}
public int getR_id() {
	return r_id;
}
public void setR_id(int r_id) {
	this.r_id = r_id;
}
public int getU_id() {
	return u_id;
}
public void setU_id(int u_id) {
	this.u_id = u_id;
}
public String getU_title() {
	return u_title;
}
public void setU_title(String u_title) {
	this.u_title = u_title;
}
public String getU_question() {
	return u_question;
}
public void setU_question(String u_question) {
	this.u_question = u_question;
}
public String getR_answer() {
	return r_answer;
}
public void setR_answer(String r_answer) {
	this.r_answer = r_answer;
}
public String getR_flag() {
	return r_flag;
}
public void setR_flag(String r_flag) {
	this.r_flag = r_flag;
}
public String getR_responser() {
	return r_responser;
}
public void setR_responser(String r_responser) {
	this.r_responser = r_responser;
}

}
