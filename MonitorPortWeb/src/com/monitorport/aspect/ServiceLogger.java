package com.monitorport.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;
@Component//ɨ��,�����ɨ�赽Spring����
@Aspect//����ǰ�������Ϊ�������
public class ServiceLogger {
	@Before("within(com.monitor.service..*)")
	public void slogger(){
		
		System.out.println("����Service����");
	}
}
