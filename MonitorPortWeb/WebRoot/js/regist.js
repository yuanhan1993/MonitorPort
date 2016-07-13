jQuery(document).ready(function(){
  function doStep(){
	  
    // Next Button
    $('a.next-step').click(function(event){
    	var name=document.getElementById("r_name").value;
  	  var pwd=document.getElementById("r_pwd").value;
  	  var pwd_re=document.getElementById("pwd_re").value;
      if(name!=''&&pwd!=''&&pwd_re!=''){
    	  if(pwd!=pwd_re){
    		 alert("两次密码不一致！");
    	  }else if(pwd.length<6){
    		  alert("密码最少6位！")
    	  }else{
    		// Part 1
              if($('.alpha').hasClass("in")) {
                $('.alpha').removeClass("in");
              }
              $('.alpha').addClass("out");
              // Part 2
              if($('.beta').hasClass("out")) {
                $('.beta').removeClass("out");
              }
              $('.beta').addClass("in");  
    	  }
    	
      }else{
    	  alert("请填写完整");
      }
      
    });
    
    // Previous Button
    $('a.prev-step').click(function(event){
      event.preventDefault(); 
      $('.alpha').removeClass("out").addClass("in");
      $('.beta').removeClass("in").addClass("out");
    });
    
    // Submit & Complete
    $('#regist').click(function(event){
    	
    	if(check_mail()!=1){
    		alert("邮箱格式不正确");
    	}else if(check_phone()!=1){
    		alert("手机格式不正确");
    	} else if(name=="admin1"){
    		alert("用户名不合法!")
    	}else{
    		to_regist();
    	
     // event.preventDefault();
      // Part 1
     
    	} //else end
    	});
    
  }
  // Active Functions
  doStep();
});



//验证账号的格式及是否被占用
function check_code() {

	// 1.获取账号的值
	// 2.创建正则表达式并验证是否匹配，若不匹配，追加错误样式，否则追加正确样式
	var name = $("#r_name").val();
	var reg = /^\w{3,20}$/;
	var style_ok=true;
	// 将添加过的图片移除
	//$("#r_name_msg img").remove();
	if (!reg.test(name)) {
		// 添加error图片
		//$("#r_name_msg").append(img_error);
		//$("#r_name_msg").addClass("error");
		
		style_ok=false;
	} else {
		// 添加ok图片
		//$("#r_name_msg").append(img_ok);
		//$("#r_name_msg").removeClass("error").addClass("ok");
		style_ok=true;
	}
	/*
	if(style_ok==true){
		$.ajax({
			url : "/MonitorWeb/user/checkname.do",
			type : "post",
			data : {
				"u_name" : name
			},
			dataType : "json",
			success : function(result) {
				if (result.state == 1) {
					$("#r_name_msg").val(result.msg);
					// 将添加过的图片移除
					$("#r_name_msg img").remove();
					// 添加error图片
					$("#r_name_msg").append(img_error);
					$("#r_name_msg").addClass("error");
				} else {
					$("#r_name_msg").val(result.msg);
					// 将添加过的图片移除
					$("#r_name_msg img").remove();
					// 添加ok图片
					$("#r_name_msg").append(img_ok);
					$("#r_name_msg").removeClass("error").addClass("ok");
					
				}
			}
		});
	}*/

}
// 验证密码的格式
function check_pwd() {

	// 1.获取密码的值
	// 2.创建正则表达式并验证是否匹配，若不匹配，追加错误样式，否则追加正确样式
	var pwd = $("#r_pwd").val();
	var reg = /^\w{6,30}$/;
	// 将添加过的图片移除
	//$("#r_pwd_msg img").remove();
	if (!reg.test(pwd)) {
		// 添加error图片
		//$("#r_pwd_msg").append(img_error);
		//$("#r_pwd_msg").addClass("error");
	} else {
		// 添加ok图片
		//$("#r_pwd_msg").append(img_ok);
		//$("#r_pwd_msg").removeClass("error").addClass("ok");
		return 1;
	}
}
function check_pwd_re() {
	var pwd_re = $("#pwd_re").val();
	var pwd = $("#r_pwd").val();
	// 将添加过的图片移除
	//$("#pwd_re_msg img").remove();
	if (pwd_re == pwd && pwd != "" && check_pwd() == 1) {
		// 添加ok图片
		//$("#pwd_re_msg").append(img_ok);
		//$("#pwd_re_msg").removeClass("error").addClass("ok");
		return 1;
	} else {
		//$("#pwd_re_msg").append(img_error);
		//$("#pwd_re_msg").removeClass("ok").addClass("error");
	}
}
function check_mail() {
	var mail = $("#r_mail").val();
	var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	// 将添加过的图片移除
	//$("#mail_msg img").remove();
	if (!reg.test(mail)) {
		// 添加error图片
		//$("#mail_msg").append(img_error);
		//$("#mail_msg").addClass("error");
	} else {
		// 添加ok图片
		//$("#mail_msg").append(img_ok);
		//$("#mail_msg").removeClass("error").addClass("ok");
		return 1;
	}
}
function check_phone() {
	var phone = $("#r_phone").val();
	var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	// 将添加过的图片移除
	$("#phone_msg img").remove();
	if (!reg.test(phone)) {
		// 添加error图片
		//$("#phone_msg").append(img_error);
		//$("#phone_msg").addClass("error");
	} else {
		// 添加ok图片
		//$("#phone_msg").append(img_ok);
		//$("#phone_msg").removeClass("error").addClass("ok");
		return 1;
	}
}
// 注册
function to_regist() {
	var name = $("#r_name").val();
	var password = $("#r_pwd").val();
	var phone = $("#r_phone").val();
	var mail = $("#r_mail").val();
	var desc = $("#desc").val();
	var location=$("#r_location").val();
	var realName=$("#r_realName").val();
	 alert(name+","+password+","+phone+","+mail+","+desc+","+location+","+realName);
	$.ajax({
		url : "http://localhost:8080/MonitorPortWeb/user/regist.do",
		type : "post",
		data : {
			"u_name" : name,
			"u_password" : password,
			"u_phone" : phone,
			"u_mail" : mail,
			"u_desc" : desc,
			"u_location":location,
			"u_realName":realName
		},
		dataType : "json",
		success : function(result) {
			if (result.state == 0) {
				alert(result.msg);
				// window.location.href="login.html";
				 if($('.beta').hasClass("in")) {
				        $('.beta').removeClass("in");
				      }
				      $('.beta').addClass("out");
				      // Part 2
				      if($('.charlie').hasClass("out")) {
				        $('.charlie').removeClass("out");
				      }
				      $('.charlie').addClass("in");
				
			}
			if (result.state == 1) {
				alert("无法注册，请检查用户名");
			}
		},
		error : function() {
			alert("注册发生异常！");
		}

	});
  //return false;
}