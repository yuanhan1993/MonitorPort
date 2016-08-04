package com.monitorport.aspect;

import java.io.FileWriter;
import java.io.PrintWriter;

import org.aspectj.lang.annotation.AfterThrowing;

public class ExceptionLogger {
	@AfterThrowing(throwing="ex",
			pointcut="within(com.monitor.controller..*)")
		public void log(Exception ex){
			//将异常信息写入文件
			System.out.println("记录异常信息:"+ex);
			try{
				FileWriter fw = 
					new FileWriter("F:\\monitorweb_error.txt");
			    PrintWriter out = new PrintWriter(fw);
			    ex.printStackTrace(out);
			    out.flush();
			    out.close();
			    fw.close();
			}catch(Exception e){
				System.out.println("记录异常信息失败");
			}
			
		}
}
