var urlRoot="http://localhost:8080";
function showUser(){
	var u_id=window.localStorage.getItem("uid");
	if(u_id==null){
		window.location.href="login.html";
	}
	$.ajax({
        url:urlRoot+"/MonitorPortWeb/user/show.do",
        type:"post",
        data:{"u_id":u_id},
        dataType:"json",
        success:function(result){
        	
        		//左下角显示用户名，登录时间
        		 $(".uname").html(result.data.u_name);
        		 $("#loginCount").html(result.data.u_loginCount);
        		 var time=new Date(result.data.u_loginTime);
        		 var formatResult=formatDateTime(time);
        		 $("#loginTime").html(formatResult);
        		//保存用户资料
        		$("#alert_name").val(result.data.u_name);
        		$("#alert_realName").val(result.data.u_realName);
        		$("#alert_phone").val(result.data.u_phone);
        		$("#alert_mail").val(result.data.u_mail);
        		$("#alert_location").val(result.data.u_location);
        		$("#hide_id").val(result.data.u_id);
        		$("#hide_name").val(result.data.u_name);
        	if(result.state==1){
        		$("#updateUser").attr("disabled",true);
        	}else{
        		$("#updateUser").attr("disabled",false);
        	}
        
        }
      });
}
//处理日期格式
function formatDateTime(now) { 
	var year=now.getFullYear(); 
	var month=now.getMonth()+1; 
	var date=now.getDate(); 
	var hour=now.getHours(); 
	var minute=now.getMinutes(); 
	var second=now.getSeconds();
	var mon=month<10?''+0+month:month;
	var d=date<10?''+0+date:date;
	var s=second<10?''+0+second:second;
	var m=minute<10?''+0+minute:minute;
	var h=hour<10?''+0+hour:hour;
	return year+"-"+mon+"-"+d+" "+h+":"+m+":"+s; 
	}
//仅仅日期
function formatDate(now) { 
	var year=now.getFullYear(); 
	var month=now.getMonth()+1; 
	var date=now.getDate(); 
	var mon=month<10?''+0+month:month;
	var d=date<10?''+0+date:date;
	return year+"-"+mon+"-"+d; 
	}
//修改用户资料
function reviseUserInfo(){
  var new_realName=$("#alert_realName").val();
  var new_phone=$("#alert_phone").val();
  var new_mail=$("#alert_mail").val();
  var new_location=$("#alert_location").val();
  
  var hide_id=$("#hide_id").val();
  var hide_name=$("#hide_name").val();
  
  var isOk=true;
  if(new_realName==null||new_realName==""||new_phone==null||new_phone==""
	  &&new_mail==null||new_mail==""||new_location==null||new_location==""){
	  $("#warning_msg").html("警告！不允许有空值");
	  $("#warning-block").attr("class","alert alert-danger");
	  isOk=false;
  }
  var phoneReg=/^1[345678][0-9]{9}$/;
  if(!phoneReg.test(new_phone)){
	  $("#warning_msg").html("警告！手机号码格式错误");
	  $("#warning-block").attr("class","alert alert-danger");
	  isOk=false;
  }
  var emailReg=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi
	  if(!emailReg.test(new_mail)){
		  $("#warning_msg").html("警告！邮箱格式错误");
		  $("#warning-block").attr("class","alert alert-danger");
		  isOk=false;
	  }
  if(isOk==true){
	  $("#warning_msg").html("");
	  $("#warning-block").attr("class","alert alert-danger hide");
	  $.ajax({
	        url:"http://localhost:8080/MonitorPortWeb/user/upUser.do",
	        type:"post",
	        data:{"u_realName":new_realName,"u_phone":new_phone,"u_mail":new_mail,
	        	"u_location":new_location,"u_upchecked":1,"u_id":hide_id,"u_name":hide_name},
	        dataType:"json",
	        success:function(result){
	        	if(result.state==0){
	        	  alert("修改申请已提交，等待审核");
	        	  $("#updateUser").attr("disabled",true);
	        	}
	        
	        }
	      });
	  
  }
}

function revisePwd(){
	 var hide_id=$("#hide_id").val();
	 var oldPwd=$("#alert_oldpwd").val();
	 var newPwd=$("#alert_newpwd").val();
	 var confirmPwd=$("#alert_confirmpwd").val();
	 var isOk=true;
	 var reg = /^\w{6,30}$/;
	 if(oldPwd==null||newPwd==null||confirmPwd==null||oldPwd==""||newPwd==""||confirmPwd==""){
		 $("#warning_pwdmsg").html("警告！不允许有空值");
		  $("#warning-pwd").attr("class","alert alert-danger");
		 isOk=false;
	 }
	 if(!reg.test(newPwd)){
		 $("#warning_pwdmsg").html("警告！密码格式错误，6-30位数字、字母、下划线组合");
		  $("#warning-pwd").attr("class","alert alert-danger");
		 isOk=false;
	 }
	 if(newPwd!=confirmPwd){
		 $("#warning_pwdmsg").html("警告！前后密码不一致");
		  $("#warning-pwd").attr("class","alert alert-danger");
		 idOk=false;
	 }
	 if(isOk==true){
		 $("#warning_pwdmsg").html("");
		  $("#warning-pwd").attr("class","alert alert-danger hide");
		 //发送ajax请求
		  $.ajax({
		        url:"http://localhost:8080/MonitorPortWeb/user/upPwd.do",
		        type:"post",
		        data:{"u_id":hide_id,"old_pwd":oldPwd,"new_pwd":newPwd},
		        dataType:"json",
		        success:function(result){
		        	if(result.state==0){
		        		$("#warning_pwdmsg").html("<span class='glyphicon glyphicon-ok'></span>&nbsp;密码修改成功");
		      		  $("#warning-pwd").attr("class","alert alert-success");
		        	}
		        	if(result.state==1){
		        		$("#warning_pwdmsg").html("<span class='glyphicon glyphicon-bell'></span>&nbsp;旧密码不正确");
			      		$("#warning-pwd").attr("class","alert alert-danger");
		        	}
		        
		        }
		      });
		 
	 }
	 
}
function closepwdModal(){
	$("#warning_pwdmsg").html("");
	$("#warning-pwd").attr("class","alert alert-danger hide");
	$("#alert_oldpwd").val("");
    $("#alert_newpwd").val("");
    $("#alert_confirmpwd").val("");
}





