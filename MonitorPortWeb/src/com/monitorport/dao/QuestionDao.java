package com.monitorport.dao;

import java.util.List;

import com.monitorport.entity.Page;
import com.monitorport.entity.Question;

public interface QuestionDao {
public List<Question> findQByUId(Page page);//�����û�id���ҷ�����Ϣ
public int insertNewQuestion(Question question);//�����µķ�����Ϣ
public int getQuestionCount(String u_id);//����u_id����������Ŀ
public List<Question> showQuestion(Page page);//����ҳ����ʾ������Ϣ
public int getSearchCount(Page page); //�õ������������Ŀ
public Question findQByRId(String r_id);//����id��������
public int addSystemQuestion(Question question);//����ϵͳ����
public int updQuestion(Question question);//��������
public int delQuestion(String r_id);//�����������
}
