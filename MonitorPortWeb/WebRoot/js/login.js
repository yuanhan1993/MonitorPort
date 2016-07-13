function login(){
            var u_name=$("#username").val();
            var u_password=$("#password").val();  
            //检查数据格式
            var ok=true;
            if(u_name==""||u_name==null){
            	$("#loginNameWarning").show();
              ok=false;
            }
            if(u_password==""||u_password==null){
            	$("#loginPwdWarning").show();
             ok=false;
            }
            //如果格式正确，发送ajax请求
            if(ok==true){
            	if(u_name=="admin1"){
            		//系统管理员身份登录
            		 $.ajax({
                         url:"http://localhost:8080/MonitorPortWeb/admin/login.do",
                         type:"post",
                         data:{"a_username":u_name,"a_password":u_password},
                         dataType:"json",
                         success:function(result){
                         	
                         var state=result.state;
                         var msg=result.msg;
                         if(state==0){
                          //获取用户ID，写入Storage
                          var a_id=result.data;
                          window.localStorage.setItem("aid",a_id);
                          window.location.href="aindex.html";
                         }else {
                         alert("用户名或密码错误！");
                         	
                         }
                         
                         }
                       });
            	}else{
            		
            	//普通用户登录
              $.ajax({
                url:"http://localhost:8080/MonitorPortWeb/user/login.do",
                type:"post",
                data:{"u_name":u_name,"u_password":u_password},
                dataType:"json",
                success:function(result){
                	
                var state=result.state;
                var msg=result.msg;
                if(state==0){
                 //获取用户ID，写入Storage
                 var u_id=result.data;
                // addStorage("uid",u_id);
                 window.localStorage.setItem("uid",u_id);
                 var caonidaye=window.localStorage.getItem("uid");
                 if(document.getElementById("rememberme").checked){
                	 window.localStorage.setItem("remembername",u_name);
             		//addStorage("password",u_password);
                	 window.localStorage.setItem("remember",true);
             		
             	}else{
             		window.localStorage.removeItem("remember");
             		//delStorage("password");
             		window.localStorage.removeItem("remembername");
             	}  
                 window.location.href="home.html";
                }else {
                alert("用户名或密码错误！");
                	
                }
                
                }
              });
            	}
            }
            }

function logOut(){
	//清除本地存储信息
	//delCookie("uid");
	 window.localStorage.removeItem("uid");
	window.location.href="login.html";
}