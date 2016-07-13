package com.monitorport.entity;

import java.io.Serializable;

public class Message implements Serializable{
	private Integer m_id; // 信息序号
	private Integer u_id; //用户id
	private String m_time; // 时间
	private String m_location;//地点
	private String m_msg; // 消息
	private Integer m_status; //状态
	private String m_result; // 结果
	private String m_video;//视频路径
	public String getM_video() {
		return m_video;
	}
	public void setM_video(String m_video) {
		this.m_video = m_video;
	}
	public Integer getM_id() {
		return m_id;
	}
	public void setM_id(Integer m_id) {
		this.m_id = m_id;
	}
	public String getM_time() {
		return m_time;
	}
	public void setM_time(String m_time) {
		this.m_time = m_time;
	}
	public String getM_msg() {
		return m_msg;
	}
	public void setM_msg(String m_msg) {
		this.m_msg = m_msg;
	}
	public Integer getM_status() {
		return m_status;
	}
	public void setM_status(Integer m_status) {
		this.m_status = m_status;
	}
	public String getM_result() {
		return m_result;
	}
	public void setM_result(String m_result) {
		this.m_result = m_result;
	}
	public Integer getU_id() {
		return u_id;
	}
	public void setU_id(Integer u_id) {
		this.u_id = u_id;
	}
	public String getM_location() {
		return m_location;
	}
	public void setM_location(String m_location) {
		this.m_location = m_location;
	}
	@Override
	public String toString() {
		return "Message [m_id=" + m_id + ", u_id=" + u_id + ", m_time="
				+ m_time + ", m_location=" + m_location + ", m_msg=" + m_msg
				+ ", m_status=" + m_status + ", m_result=" + m_result + "]";
	}

	
}
