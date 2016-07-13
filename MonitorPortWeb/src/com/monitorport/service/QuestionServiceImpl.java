package com.monitorport.service;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import com.monitorport.dao.QuestionDao;
import com.monitorport.entity.MessageResult;
import com.monitorport.entity.Page;
import com.monitorport.entity.Question;
@Service
public class QuestionServiceImpl implements QuestionService{
	@Resource
    private QuestionDao questionDao;
	public MessageResult findQuestionByUID(String u_id,String currentPage,String pageSize) {
		MessageResult result=new MessageResult();
		Page page=new Page();
		if(!"".equals(currentPage)&&currentPage!=null){
			page.setCurrentPage(Integer.parseInt(currentPage));
		}
		if(!"".equals(pageSize)&&pageSize!=null){
			page.setPageSize(Integer.parseInt(pageSize));
		}
		page.setU_id(u_id);
		page.setTotalCount(questionDao.getQuestionCount(u_id));
		List<Question> questions=questionDao.findQByUId(page);
		result.setData(questions);
		result.setState(0);
		return result;
	}
	public MessageResult insertNewQuestion(String u_id, String u_title,
			String u_question, Date r_date) {
		MessageResult result=new MessageResult();
		Question q=new Question();
		q.setU_id(Integer.parseInt(u_id));
		q.setU_title(u_title);
		q.setU_question(u_question);
		q.setR_date(r_date);
		int qc=questionDao.insertNewQuestion(q);
		if(qc>0){
			result.setState(0);
			result.setMsg("提交成功，请耐心等待");
		}else{
			result.setState(1);
			result.setMsg("提交失败，请与管理员联系");
		}
		return result;
	}
	public MessageResult getCountForQuestion(String u_id) {
		MessageResult result=new MessageResult();
		int count=questionDao.getQuestionCount(u_id);
		result.setData(count);
		result.setState(0);
		return result;
	}
	public MessageResult showQuestion(String currentPage, String pageSize,
			String r_id, String u_title, String r_flag) {
		MessageResult result=new MessageResult();
		Page page=new Page();
		if(!"".equals(currentPage)&&currentPage!=null){
			page.setCurrentPage(Integer.parseInt(currentPage));
		}
		if(!"".equals(pageSize)&&pageSize!=null){
			page.setPageSize(Integer.parseInt(pageSize));
		}
		page.setU_id(r_id);
		page.setU_title(u_title);
		page.setR_flag(r_flag);
		page.setTotalCount(questionDao.getSearchCount(page));
		
		
		List<Question> questions=questionDao.showQuestion(page);
		result.setData(questions);
		result.setPage(page);
		result.setState(0);
		return result;
	}
	public MessageResult getSearchCount(
			String r_id, String u_title, String r_flag) {
		MessageResult result=new MessageResult();
		Page page=new Page();
		page.setU_id(r_id);
		page.setU_title(u_title);
		page.setR_flag(r_flag);
		int count=questionDao.getSearchCount(page);
		if(count>0){
			result.setData(count);
			result.setState(0);
		}else{
			result.setState(1);
		}
		return result;
	}
	public MessageResult findQuestionByRID(String r_id) {
		MessageResult result=new MessageResult();
		Question q=questionDao.findQByRId(r_id);
		if(q!=null){
			result.setState(0);
			result.setData(q);
		}else{
			result.setState(1);
		}
		return result;
	}
	public MessageResult addSystemQuestion(String u_id, String u_title,
			String u_question, String r_answer, String r_flag,
			String r_responser, Date r_date) {
		MessageResult result=new MessageResult();
		Question q=new Question();
		q.setU_id(Integer.parseInt(u_id));
		q.setU_title(u_title);
		q.setU_question(u_question);
		q.setR_date(r_date);
		q.setR_answer(r_answer);
		q.setR_flag(r_flag);
		q.setR_responser(r_responser);
		int count=questionDao.addSystemQuestion(q);
		if(count>0){
			result.setState(0);
		}else{
			result.setState(1);
		}
		return result;
	}
	public MessageResult updateQuestion(String r_answer, String r_responser,
			String r_id ,String r_flag) {
		MessageResult result=new MessageResult();
		Question q=new Question();
		q.setR_answer(r_answer);
		q.setR_responser(r_responser);
		q.setR_id(Integer.parseInt(r_id));
		q.setR_flag(r_flag);
		int count=questionDao.updQuestion(q);
		if(count>0){
			result.setState(0);
		}else{
			result.setState(1);
		}
		return result;
	}
	public MessageResult deleteQuestion(String r_id) {
		MessageResult result=new MessageResult();
		int count=questionDao.delQuestion(r_id);
		if(count>0){
			result.setState(0);
		}
		else{
			result.setState(1);
		}
		return result;
	}

}
