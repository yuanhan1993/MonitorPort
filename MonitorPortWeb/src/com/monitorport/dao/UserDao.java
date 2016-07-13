package com.monitorport.dao;

import java.util.List;

import com.monitorport.entity.Admin;
import com.monitorport.entity.Page;
import com.monitorport.entity.User;
import com.monitorport.entity.UserForUpd;

public interface UserDao {
/**
 * �����û����ҵ��û�
 * @param u_name
 * @return
 */
public User findByName(String u_name);
/**
 * ����id�ҵ��û�
 * @param u_id
 * @return
 */
public User findById(String u_id);
/**
 * �ۺϲ����û�
 * @param page
 * @return
 */
public List<User> showUsers(Page page);
/**
 * ��ѯ�û�����
 * @param page
 * @return
 */
public int getUserCount(Page page);
/**
 * �����û���¼��Ϣ
 * @param user
 * @return
 */
public int updUserLogin(User user);
/**
 * �������û���Ϣ
 * @param user
 * @return
 */
public int save(User user);
/**
 * ����û���
 * @param u_name
 */
public void checkName(String u_name);
/**
 * �����û�������Ϣ
 * @param updUser
 * @return
 */
public int insertUpdUser(UserForUpd updUser);
/**
 * ����id�����û�������Ϣ
 * @param u_id
 * @return
 */
public List<UserForUpd> findUpdByUId(String u_id);
/**
 * �޸��û�����
 * @param user
 * @return
 */
public int updUserPwd(User user);
/**
 * ͬ�����û���ע��
 * @param u_id
 * @return
 */
public int agreeNewUser(String u_id);
/**
 * ɾ���û�
 * @param u_id
 * @return 
 */
public int delUser(String u_id);
/**
 * ������
 * @param user
 * @return
 */
public int insertFlag(User user);
/**
 * �û������б�
 * @param page
 * @return
 */
public List<UserForUpd> showUpUser(Page page);
/**
 * �û�������Ŀ
 * @return
 */
public int getUpCount();
/**
 * ͬ���û�����
 * @param u_id
 * @return
 */
public int agreeUpUser(String u_id);
/**
 * �����û���Ϣ
 * @param updUser
 * @return
 */
public int updUser(UserForUpd updUser);
/**
 * ���ҹ���Ա
 * @param a
 * @return
 */
public Admin findAdmin(Admin a);
}
