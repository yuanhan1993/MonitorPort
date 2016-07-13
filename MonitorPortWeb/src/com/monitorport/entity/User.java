package com.monitorport.entity;

import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class User implements Serializable {
	private Integer u_id; //用户id
	private String u_name; // 用户名
	private String u_realName;//用户真实姓名
	private String u_password;//用户密码
	private String u_phone; // 手机号码
	private String u_mail; // 邮箱
	private String u_location;//籍贯
	private String u_desc; //注册时的留言
    private Date u_loginTime;//登录时间
    private Integer u_loginCount;//登录次数
    private String u_checked;//审核状态
    private String u_hasflag;//是否被标记过
    private String u_flagReason;//标记原因
    
	public String getU_hasflag() {
		return u_hasflag;
	}

	public void setU_hasflag(String u_hasflag) {
		this.u_hasflag = u_hasflag;
	}

	public String getU_flagReason() {
		return u_flagReason;
	}

	public void setU_flagReason(String u_flagReason) {
		this.u_flagReason = u_flagReason;
	}

	public String getU_checked() {
		return u_checked;
	}

	public void setU_checked(String u_checked) {
		this.u_checked = u_checked;
	}

	public String getU_location() {
		return u_location;
	}

	public String getU_realName() {
		return u_realName;
	}

	public void setU_realName(String u_realName) {
		this.u_realName = u_realName;
	}

	public void setU_location(String u_location) {
		this.u_location = u_location;
	}

	public Date getU_loginTime() {
		return u_loginTime;
	}

	public void setU_loginTime(String u_loginTime) {
		SimpleDateFormat sdf = new SimpleDateFormat(
				"yyyy-MM-dd HH:mm:ss");
		Date loginTime;
		try {
			loginTime = sdf.parse(u_loginTime);
			this.u_loginTime = loginTime;
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	public Integer getU_loginCount() {
		return u_loginCount;
	}

	public void setU_loginCount(Integer u_loginCount) {
		this.u_loginCount = u_loginCount;
	}

	public Integer getU_id() {
		return u_id;
	}

	public void setU_id(Integer u_id) {
		this.u_id = u_id;
	}

	public String getU_name() {
		return u_name;
	}

	public void setU_name(String u_name) {
		this.u_name = u_name;
	}

	public String getU_password() {
		return u_password;
	}

	public void setU_password(String u_password) {
		this.u_password = u_password;
	}

	public String getU_phone() {
		return u_phone;
	}

	public void setU_phone(String u_phone) {
		this.u_phone = u_phone;
	}

	public String getU_mail() {
		return u_mail;
	}

	public void setU_mail(String u_mail) {
		this.u_mail = u_mail;
	}

	public String getU_desc() {
		return u_desc;
	}

	public void setU_desc(String u_desc) {
		this.u_desc = u_desc;
	}


}
