package com.monitorport.service;

import com.monitorport.entity.MessageResult;
import com.monitorport.entity.Page;
/**
 * 处理用户信息
 * @author yh
 *
 */
public interface UserService {
  //检查登录
  public MessageResult checkLogin(String u_name,String u_password);
  //检查用户名是否已经存在
  public MessageResult checkName(String u_name);
  //查找用户
  public MessageResult showUser(String currentPage,String pageSize,String u_id,String u_checked,String u_location,String u_phone,String u_realName,String u_hasflag);
  //查找用户数目
  public MessageResult getUsersCount(String u_id,String u_checked,String u_location,String u_phone,String u_realName,String u_hasflag);
  //注册
  public MessageResult regist(String u_name,String u_password,String u_phone,String u_mail,String u_desc,String u_location,String u_realName);
  //更新用户信息
  public MessageResult updateUser(String u_realName,String u_password,String u_location,String u_phone,String u_mail,String u_upchecked,String u_id,String u_name);
  //更新密码
  public MessageResult updatePwd(String u_id,String old_pwd,String new_pwd);
  public MessageResult agreeAddUser(String u_id);
 
  public MessageResult deleteUser(String u_id);
  
 public MessageResult insertUserFlag(String u_id,String u_hasflag,String u_flagReason);
 
 public MessageResult showUpUser(String currentPage,String pageSize);
 
 public MessageResult getUpCount();
 
 public MessageResult agreeUpUser(String u_id);
 
 public MessageResult checkAdmin(String a_username,String a_password);
 
 
}
