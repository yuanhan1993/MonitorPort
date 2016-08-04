package com.monitorport.service;

import java.util.Date;

import com.monitorport.entity.MessageResult;
/**
 * 处理问题反馈信息
 * @author yh
 *
 */
public interface QuestionService {
public MessageResult findQuestionByUID(String u_id,String currentPage,String pageSize);
public MessageResult insertNewQuestion(String u_id,String u_title,String u_question,Date r_date);
public MessageResult getCountForQuestion(String u_id);
public MessageResult showQuestion(String currentPage,String pageSize,String r_id,String u_title,String r_flag);
public MessageResult getSearchCount(String r_id,String u_title,String r_flag);
public MessageResult findQuestionByRID(String r_id);
public MessageResult addSystemQuestion(String u_id,String u_title,String u_question,String r_answer,
		String r_flag,String r_responser,Date r_date);
public MessageResult updateQuestion(String r_answer,String r_responser,String r_id,String r_flag);
public MessageResult deleteQuestion(String r_id);
}
