package com.monitorport.dao;

import java.util.List;

import com.monitorport.entity.Page;
import com.monitorport.entity.Question;

public interface QuestionDao {
public List<Question> findQByUId(Page page);//根据用户id查找反馈消息
public int insertNewQuestion(Question question);//插入新的反馈消息
public int getQuestionCount(String u_id);//根据u_id查找问题数目
public List<Question> showQuestion(Page page);//根据页码显示所有信息
public int getSearchCount(Page page); //得到查找问题的数目
public Question findQByRId(String r_id);//根据id查找问题
public int addSystemQuestion(Question question);//增加系统反馈
public int updQuestion(Question question);//更新问题
public int delQuestion(String r_id);//撒谎年初问题
}
