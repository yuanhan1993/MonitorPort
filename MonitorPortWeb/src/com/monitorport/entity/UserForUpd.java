package com.monitorport.entity;

import java.util.Date;

/**
 * 用户申请更新信息的类
 * @author yh
 *
 */
public class UserForUpd {
	private Integer up_id;//id
	private Integer u_id; // 用户id
	private String u_name; // 用户名
	private String up_realName;//真实姓名
	private String up_phone; // 手机号码
	private String up_mail; // 邮箱
	private String up_location;//籍贯
    private String up_checked;//审核状态̬
	public Integer getUp_id() {
		return up_id;
	}
	public void setUp_id(Integer up_id) {
		this.up_id = up_id;
	}
	public Integer getU_id() {
		return u_id;
	}
	public void setU_id(Integer u_id) {
		this.u_id = u_id;
	}
	public String getUp_name() {
		return u_name;
	}
	public void setUp_name(String u_name) {
		this.u_name = u_name;
	}
	public String getUp_realName() {
		return up_realName;
	}
	public void setUp_realName(String up_realName) {
		this.up_realName = up_realName;
	}

	public String getUp_phone() {
		return up_phone;
	}
	public void setUp_phone(String up_phone) {
		this.up_phone = up_phone;
	}
	public String getUp_mail() {
		return up_mail;
	}
	public void setUp_mail(String up_mail) {
		this.up_mail = up_mail;
	}
	public String getUp_location() {
		return up_location;
	}
	public void setUp_location(String up_location) {
		this.up_location = up_location;
	}
	public String getUp_checked() {
		return up_checked;
	}
	public void setUp_checked(String up_checked) {
		this.up_checked = up_checked;
	}
    
}
