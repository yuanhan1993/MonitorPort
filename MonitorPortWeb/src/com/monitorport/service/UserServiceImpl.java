package com.monitorport.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.monitorport.dao.UserDao;
import com.monitorport.entity.Admin;
import com.monitorport.entity.MessageResult;
import com.monitorport.entity.Page;
import com.monitorport.entity.User;
import com.monitorport.entity.UserForUpd;

@Service
public class UserServiceImpl implements UserService {
	@Resource
	private UserDao userDao;

	public MessageResult checkLogin(String u_name, String u_password) {
		MessageResult result = new MessageResult();
		User user = userDao.findByName(u_name);
		if (user == null) {
			result.setState(1);// 用户不存在
			result.setMsg("该用户不存在");
			return result;
		}
		if (!user.getU_password().equals(u_password)) {
			result.setState(2);// 密码错误
			result.setMsg("密码不正确");
			return result;
		}
		result.setState(0);
		result.setMsg("用户名密码正确！");
		result.setData(user.getU_id());// 返回userId
		//登录次数+1  记录登录时间
		int count=user.getU_loginCount();
		user.setU_loginCount(count+1);
		Date date=new Date();
		SimpleDateFormat sdf = new SimpleDateFormat(
				"yyyy-MM-dd HH:mm:ss");
		String dateTime = sdf.format(date);
		user.setU_loginTime(dateTime);
		int upcount=userDao.updUserLogin(user);
		if(upcount==0){
			result.setState(3);
			result.setMsg("服务器故障");
		}
		return result;
	}

	public MessageResult regist(String u_name, String u_password,
			String u_phone, String u_mail, String u_desc,String u_location,String u_realName) {
		MessageResult result = new MessageResult();
		// 检查用户名是否被占用
		User has_user = userDao.findByName(u_name);
		if (has_user != null) {
			result.setState(1);
			result.setMsg("该用户名已被占用");
			return result;
		}
		// 注册
		User user = new User();
		user.setU_name(u_name);
		user.setU_password(u_password);
		user.setU_mail(u_mail);
		user.setU_phone(u_phone);
		user.setU_desc(u_desc);
		user.setU_location(u_location);
		user.setU_realName(u_realName);
		userDao.save(user);
		result.setState(0);
		result.setMsg("注册成功");
		return result;
	}

	public MessageResult checkName(String u_name) {
		MessageResult result = new MessageResult();
		// 检查用户名是否被占用
		User has_user = userDao.findByName(u_name);
		if (has_user != null) {
			result.setState(1);
			result.setMsg("该用户名已被占用");
			return result;
		}
		result.setState(0);
		result.setMsg("该用户名可用");
		return result;
	}

	public MessageResult showUser(String currentPage,String pageSize,String u_id,String u_checked,String u_location,String u_phone,String u_realName,String u_hasflag) {
		MessageResult result = new MessageResult();
		if("".equals(u_id)||u_id==null){
			Page page=new Page();
			if(!"".equals(currentPage)&&currentPage!=null){
				page.setCurrentPage(Integer.parseInt(currentPage));
				page.setPageSize(Integer.parseInt(pageSize));
			}
			
			//page.setU_id(u_id);
			page.setU_checked(u_checked);
			page.setU_location(u_location);
			page.setU_phone(u_phone);
			page.setU_realName(u_realName);
			page.setU_hasflag(u_hasflag);
			page.setTotalCount(userDao.getUserCount(page));
			//显示用户信息
			List<User> users= userDao.showUsers(page);
			result.setState(0);
			result.setMsg("查询成功");
			result.setData(users);
			result.setPage(page);
			return result;
		}else{
			User userInfo=userDao.findById(u_id);
			//查看用户是否以前有更新的操作
			List<UserForUpd> usercheck=userDao.findUpdByUId(u_id);
			if(usercheck!=null){
				for(UserForUpd user:usercheck){
					if("1".equals(user.getUp_checked())){
						result.setState(1);
						result.setMsg("上次更新用户信息请求未审核");
						result.setData(userInfo);
						return result;
					}
				}
			}
			
				result.setData(userInfo);
				result.setState(0);
				return result;
		}
		
	}

	public MessageResult updateUser(String u_realName, String u_password,
			String u_location, String u_phone, String u_mail,String u_upchecked,String u_id,String u_name) {
		MessageResult result = new MessageResult();
		UserForUpd upduser=new UserForUpd();
		upduser.setU_id(Integer.parseInt(u_id));
		upduser.setUp_name(u_name);
		upduser.setUp_realName(u_realName);
		upduser.setUp_phone(u_phone);
		upduser.setUp_mail(u_mail);
		upduser.setUp_location(u_location);
		upduser.setUp_checked(u_upchecked);
		
		if(userDao.insertUpdUser(upduser)>0){
			result.setState(0);
			result.setMsg("提交成功，等待审核。。。");
		}else{
			result.setState(1);
			result.setMsg("系统故障，提交失败。。。");
		}
		
		return result;
	}

	public MessageResult updatePwd(String u_id, String old_pwd,String new_pwd) {
		MessageResult result = new MessageResult();
		User user=userDao.findById(u_id);
		if(!user.getU_password().equals(old_pwd)){
			result.setState(1);
			result.setMsg("旧密码不正确");
			return result;
		}
		user.setU_password(new_pwd);
		int upResult=userDao.updUserPwd(user);
		if(upResult>0){
			result.setState(0);
			result.setMsg("更改成功");
		}
		return result;
	}

	public MessageResult getUsersCount(String u_id, String u_checked,String u_location,String u_phone,String u_realName,String u_hasflag) {
		MessageResult result = new MessageResult();
		Page page=new Page();
		page.setU_id(u_id);
		page.setU_checked(u_checked);
		page.setU_location(u_location);
		page.setU_phone(u_phone);
		page.setU_realName(u_realName);
		page.setU_hasflag(u_hasflag);
		int count=userDao.getUserCount(page);
		if(count>0){
			result.setData(count);
			result.setState(0);
		}else{
			result.setState(1);
		}
		return result;
	}

	public MessageResult agreeAddUser(String u_id) {
		MessageResult result = new MessageResult();
		int count=userDao.agreeNewUser(u_id);
		if(count>0){
			result.setState(0);
			return result;
		}else{
			result.setState(1);
		}
		return result;
	}

	public MessageResult deleteUser(String u_id) {
		MessageResult result = new MessageResult();
		int count=userDao.delUser(u_id);
		if(count>0){
			result.setState(0);
			return result;
		}else{
			result.setState(1);
		}
		return result;
	}

	public MessageResult insertUserFlag(String u_id, String u_hasflag,
			String u_flagReason) {
		MessageResult result = new MessageResult();
		User user=new User();
		user.setU_id(Integer.parseInt(u_id));
		user.setU_hasflag(u_hasflag);
		user.setU_flagReason(u_flagReason);
		int count=userDao.insertFlag(user);
		if(count>0){
			result.setState(0);
			return result;
		}else{
			result.setState(1);
		}
		return result;
		
	}

	public MessageResult showUpUser(String currentPage,String pageSize) {
		MessageResult result = new MessageResult();
		Page page=new Page();
		page.setCurrentPage(Integer.parseInt(currentPage));
		page.setPageSize(Integer.parseInt(pageSize));
		page.setTotalCount(userDao.getUpCount());
		List<UserForUpd> us=userDao.showUpUser(page);
		result.setData(us);
		result.setState(0);
		result.setPage(page);
		return result;
	}

	public MessageResult agreeUpUser(String u_id) {
		MessageResult result = new MessageResult();
		int count=userDao.agreeUpUser(u_id);
		if(count>0){
			result.setState(0);
			List<UserForUpd> userup=userDao.findUpdByUId(u_id);
			for(UserForUpd user:userup){
				userDao.updUser(user);
			}
			
		}else{
			result.setState(1);
		}
		return result;
	}

	public MessageResult getUpCount() {
		MessageResult result = new MessageResult();
		int count=userDao.getUpCount();
		if(count>0){
			result.setData(count);
			result.setState(0);
		}else{
			result.setState(1);
		}
		return result;
	}

	public MessageResult checkAdmin(String a_username, String a_password) {
		MessageResult result = new MessageResult();
		Admin a=new Admin();
		a.setA_username(a_username);
		a.setA_password(a_password);
		Admin hasA=userDao.findAdmin(a);
		if(hasA==null){
			result.setState(1);
			return result;
		}
		result.setState(0);
		return result;
	}

}
