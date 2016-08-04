package com.monitorport.dao;

import java.util.List;

import com.monitorport.entity.Admin;
import com.monitorport.entity.Page;
import com.monitorport.entity.User;
import com.monitorport.entity.UserForUpd;

public interface UserDao {
/**
 * 根据用户名找到用户
 * @param u_name
 * @return
 */
public User findByName(String u_name);
/**
 * 根据id找到用户
 * @param u_id
 * @return
 */
public User findById(String u_id);
/**
 * 综合查找用户
 * @param page
 * @return
 */
public List<User> showUsers(Page page);
/**
 * 查询用户总数
 * @param page
 * @return
 */
public int getUserCount(Page page);
/**
 * 更新用户登录信息
 * @param user
 * @return
 */
public int updUserLogin(User user);
/**
 * 保存新用户信息
 * @param user
 * @return
 */
public int save(User user);
/**
 * 检查用户名
 * @param u_name
 */
public void checkName(String u_name);
/**
 * 插入用户更改信息
 * @param updUser
 * @return
 */
public int insertUpdUser(UserForUpd updUser);
/**
 * 根据id查找用户更改信息
 * @param u_id
 * @return
 */
public List<UserForUpd> findUpdByUId(String u_id);
/**
 * 修改用户密码
 * @param user
 * @return
 */
public int updUserPwd(User user);
/**
 * 同意新用户的注册
 * @param u_id
 * @return
 */
public int agreeNewUser(String u_id);
/**
 * 删除用户
 * @param u_id
 * @return 
 */
public int delUser(String u_id);
/**
 * 插入标记
 * @param user
 * @return
 */
public int insertFlag(User user);
/**
 * 用户更新列表
 * @param page
 * @return
 */
public List<UserForUpd> showUpUser(Page page);
/**
 * 用户更新数目
 * @return
 */
public int getUpCount();
/**
 * 同意用户更新
 * @param u_id
 * @return
 */
public int agreeUpUser(String u_id);
/**
 * 更新用户信息
 * @param updUser
 * @return
 */
public int updUser(UserForUpd updUser);
/**
 * 查找管理员
 * @param a
 * @return
 */
public Admin findAdmin(Admin a);
}
