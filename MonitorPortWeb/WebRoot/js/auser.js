function userAllFns() {
	getUserAllCount();
	showUserAll(1);
	$("#currentPage").html(1);
	$("#group input").hide();
	$("#allusname").show();

}
function userCheckFns() {
	getUserCheckCount();
	showUserCheck(1);
	$("#currentPage").html(1);
	$("#group input").hide();
	$("#sname").show();
}
function userImportFns() {
	getUsersImportCount();
	showUsersImport(1);
	$("#currentPage").html(1);
	$("#group input").hide();
	$("#usname").show();
}
//创建分页
function createPageForUserAll(pageSize, buttons, total) {
	$("#userallPage").jBootstrapPage({
		pageSize : pageSize,
		total : total,
		maxPageButton : buttons,
		onPageClicked : function(obj, pageIndex) {
		    $("#currentPage").html(pageIndex+1);
			// 点击页数执行操作
			 showUserAll(pageIndex+1);
			

		}
	});
}
//查询用户数目
function getUserAllCount(){
  var u_phone=$("#usphone").val();
  var u_location=$("#uslocation").val();
  var u_realName=$("#allusname").val();

  $.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/getcount.do",
	type : "post",
	data : {
		"u_checked" : 0,
		"u_phone" : u_phone,
        "u_location":u_location,
        "u_realName":u_realName
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		$("#totalCount").html(result.data);
			var totalNum = result.data;
			createPageForUserAll(5, 5, totalNum);
		}
		if(result.state==1){
		$("#totalCount").html(0);
		$("#allPage").html(0);
		}

	}
});
}
//查询用户
function showUserAll(pageIndex){
  var u_phone=$("#usphone").val();
  var u_location=$("#uslocation").val();
  var u_realName=$("#allusname").val();
 
  $.ajax({
				url : "http://localhost:8080/MonitorPortWeb/user/show.do",
				type : "post",
				data : {
					"currentPage" : pageIndex,
					"pageSize" : 5,
					"u_checked":0,
					"u_phone" : u_phone,
                    "u_location":u_location,
                    "u_realName":u_realName
				},
				dataType : "json",
				async : true,
				success : function(result) {
					if (result.state == 0) {
						$("#userall").empty();
						var msgs = result.data;
						for ( var i = 0; i < msgs.length; i++) {
							var u_id = msgs[i].u_id;
							var u_name = msgs[i].u_name;
							var u_realName = msgs[i].u_realName;
							var u_location = msgs[i].u_location;
							var u_phone = msgs[i].u_phone;
							var u_mail = msgs[i].u_mail;
							var u_loginTime=msgs[i].u_loginTime;
							//var u_desc = msgs[i].u_desc;
							var user ='<tr>'+
							'<td>'+u_id+'</td>'+
							'<td>'+u_name+'</td>'+
							'<td>'+u_realName+'</td>'+
							'<td>'+u_phone+'</td>'+
							'<td>'+u_mail+'</td>'+
							'<td>'+u_location+'</td>'+
							'<td>'+u_loginTime+'</td>'+
							'<td>'+
								'<div class="btn-group" role="group">'+
'<button type="button" class="btn btn-info" data-toggle="modal" data-target="#userallModal" onclick="showUserAllDetail('+u_id+')">详情</button>'+
'<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delModal" onclick="saveFn('+u_id+')">删除</button>'+
'<button type="button" class="btn btn-success" data-toggle="modal" data-target="#setFlagModal" onclick="saveFn('+u_id+')">标记</button>'+
								'</div>'+
							'</td>'+
						'</tr>';
							var $user = $(user);
							//$user.data("u_id", u_id);
							$("#userall").append($user);
						}
					}
					var totalPage=result.page.totalPage;
					$("#allPage").html(totalPage);

				}
			});
}
function searchUsersAll(){
$("#currentPage").html(1);
  getUserAllCount();
  showUserAll(1);
}
function showAllInput(obj){
$("#group input").val("");
  $("#group input").hide();
  $("#group").find(obj).show();
}
function showUserAllDetail(obj){
$("#userallForm input").attr("disabled",true);
    $.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/show.do",
	type : "post",
	data : {
		"u_id" : obj
	},
	dataType : "json",
	async : true,
	success : function(result) {
		if (result.state == 0) {
		  $("#alert_uname").val(result.data.u_name);
		  $("#alert_urealname").val(result.data.u_realName);
		  $("#alert_location").val(result.data.u_location);
		  $("#alert_phone").val(result.data.u_phone);
		  $("#alert_mail").val(result.data.u_mail);
		  $("#alert_time").val(result.data.u_loginTime);
		  $("#alert_count").val(result.data.u_loginCount);
		  $("#alert_desc").val(result.data.u_desc);
		}
	}
});
}
function saveFn(obj){
 $(".hideid").val(obj);
 $("#reason").val("");
}
/* function agreeAdd(){
var u_id=$("#hideid").val();
   $.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/agreeadd.do",
	type : "post",
	data : {
		"u_id" : u_id
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		 searchUsersAll();
		}else{
		 alert("操作失败！");
		}
	}
});
} */
function delUserAll(){
	$("#delModal").modal('hide');
  var u_id=$(".hideid").val();
    $.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/delUserAll.do",
	type : "post",
	data : {
		"u_id" : u_id
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		$("#delModal").modal('hide');
		 searchUsersAll();
		}else{
		 alert("操作失败！");
		}
	}
}); 
}
function toFlag(){
var u_id=$(".hideid").val();
var u_flagReason=$("#reason").val();
$.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/insertflag.do",
	type : "post",
	data : {
		"u_id" : u_id,
		"u_hasflag":0,
		"u_flagReason":u_flagReason
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		 alert("标记成功！");
		}else{
		 alert("操作失败！");
		}
	}
}); 
}

//创建分页
function createPageForUserImport(pageSize, buttons, total) {
	$("#userimportPage").jBootstrapPage({
		pageSize : pageSize,
		total : total,
		maxPageButton : buttons,
		onPageClicked : function(obj, pageIndex) {
		    $("#currentPage").html(pageIndex+1);
			// 点击页数执行操作
			
			 showUsersImport(pageIndex+1);
			
			

		}
	});
}
//查询用户数目
function getUsersImportCount(){
  var u_phone=$("#usphone").val();
  var u_location=$("#uslocation").val();
  var u_realName=$("#usname").val();

  $.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/getcount.do",
	type : "post",
	data : {
		"u_checked" : 0,
		"u_phone" : u_phone,
        "u_location":u_location,
        "u_realName":u_realName,
        "u_hasflag":0
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		$("#totalCount").html(result.data);
			var totalNum = result.data;
			createPageForUserImport(5, 5, totalNum);
		}
		if(result.state==1){
		$("#totalCount").html(0);
		$("#allPage").html(0);
		}

	}
});
}
//查询用户
function showUsersImport(pageIndex){
  var u_phone=$("#usphone").val();
  var u_location=$("#uslocation").val();
  var u_realName=$("#usname").val();
 
  $.ajax({
				url : "http://localhost:8080/MonitorPortWeb/user/show.do",
				type : "post",
				data : {
					"currentPage" : pageIndex,
					"pageSize" : 5,
					"u_checked":0,
					"u_phone" : u_phone,
                    "u_location":u_location,
                    "u_realName":u_realName,
                    "u_hasflag":0
				},
				dataType : "json",
				async : true,
				success : function(result) {
					if (result.state == 0) {
						$("#userall").empty();
						var msgs = result.data;
						for ( var i = 0; i < msgs.length; i++) {
							var u_id = msgs[i].u_id;
							var u_name = msgs[i].u_name;
							var u_realName = msgs[i].u_realName;
							var u_location = msgs[i].u_location;
							var u_phone = msgs[i].u_phone;
							var u_mail = msgs[i].u_mail;
							var u_flagReason=msgs[i].u_flagReason;
							
							var user ='<tr>'+
							'<td>'+u_id+'</td>'+
							'<td>'+u_name+'</td>'+
							'<td>'+u_realName+'</td>'+
							'<td>'+u_phone+'</td>'+
							'<td>'+u_mail+'</td>'+
							'<td>'+u_location+'</td>'+
							'<td>'+u_flagReason+'</td>'+
							'<td>'+
								'<div class="btn-group" role="group">'+
'<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#delFlagModal" onclick="saveFn('+u_id+')">取消标记</button>'+
								'</div>'+
							'</td>'+
						'</tr>';
							var $user = $(user);
							//$user.data("u_id", u_id);
							$("#userall").append($user);
						}
					}
					var totalPage=result.page.totalPage;
					$("#allPage").html(totalPage);

				}
			});
}
function searchImportUsers(){
$("#currentPage").html(1);
  getUsersImportCount();
  showUsersImport(1);
}
function showUserImInput(obj){
$("#group input").val("");
  $("#group input").hide();
  $("#group").find(obj).show();
}

function saveFn(obj){
 $(".hideid").val(obj);
 $("#reason").val("");
}

function delFlag(){
var u_id=$(".hideid").val();
$.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/insertflag.do",
	type : "post",
	data : {
		"u_id" : u_id,
		"u_hasflag":1,
		"u_flagReason":""
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		 $('#delFlagModal').modal('hide');
		 searchImportUsers();
		}else{
		 alert("操作失败！");
		}
	}
}); 
}


//创建分页
function createPageForUserCheck(pageSize, buttons, total) {
	$("#userPage").jBootstrapPage({
		pageSize : pageSize,
		total : total,
		maxPageButton : buttons,
		onPageClicked : function(obj, pageIndex) {
		    $("#currentPage").html(pageIndex+1);
			// 点击页数执行操作
			
			 showUserCheck(pageIndex+1);
			
			

		}
	});
}
//查询用户数目
function getUserCheckCount(){
  var u_phone=$("#sphone").val();
  var u_location=$("#slocation").val();
  var u_realName=$("#sname").val();

  $.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/getcount.do",
	type : "post",
	data : {
		"u_checked" : 1,
		"u_phone" : u_phone,
        "u_location":u_location,
        "u_realName":u_realName
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		$("#totalCount").html(result.data);
			var totalNum = result.data;
			createPageForUserCheck(5, 5, totalNum);
		}
		if(result.state==1){
		$("#totalCount").html(0);
		$("#allPage").html(0);
		}

	}
});
}
//查询用户
function showUserCheck(pageIndex){
  var u_phone=$("#sphone").val();
  var u_location=$("#slocation").val();
  var u_realName=$("#sname").val();
 
  $.ajax({
				url : "http://localhost:8080/MonitorPortWeb/user/show.do",
				type : "post",
				data : {
					"currentPage" : pageIndex,
					"pageSize" : 5,
					"u_checked":1,
					"u_phone" : u_phone,
                    "u_location":u_location,
                    "u_realName":u_realName
				},
				dataType : "json",
				async : true,
				success : function(result) {
					if (result.state == 0) {
						$("#userchecks").empty();
						var msgs = result.data;
						for ( var i = 0; i < msgs.length; i++) {
							var u_id = msgs[i].u_id;
							var u_name = msgs[i].u_name;
							var u_realName = msgs[i].u_realName;
							var u_location = msgs[i].u_location;
							var u_phone = msgs[i].u_phone;
							var u_mail = msgs[i].u_mail;
							//var u_desc = msgs[i].u_desc;
							var user ='<tr>'+
							'<td>'+u_id+'</td>'+
							'<td>'+u_name+'</td>'+
							'<td>'+u_realName+'</td>'+
							'<td>'+u_phone+'</td>'+
							'<td>'+u_mail+'</td>'+
							'<td>'+u_location+'</td>'+
							'<td>'+
								'<div class="btn-group" role="group">'+
									'<button type="button" class="btn btn-info" onclick="showUserCheckDetail('+u_id+')" data-toggle="modal"'+
									'data-target="#usercheckModel">详情</button>'+
									'<button type="button" class="btn btn-success" onclick="saveFn('+u_id+')" data-toggle="modal"'+
									'data-target="#agreeModel">同意</button>'+
									'<button type="button" class="btn btn-warning" onclick="saveFn('+u_id+')" data-toggle="modal"'+
									'data-target="#refuseModal">拒绝</button>'+
								'</div>'+
							'</td>'+
						'</tr>';
							var $user = $(user);
							//$user.data("u_id", u_id);
							$("#userchecks").append($user);
						}
					}
					var totalPage=result.page.totalPage;
					$("#allPage").html(totalPage);

				}
			});
  
  
}


function searchCheckUsers(){
$("#currentPage").html(1);
  getUserCheckCount();
  showUserCheck(1);
}
function showUserCheckInput(obj){
$("#group input").val("");
  $("#group input").hide();
  $("#group").find(obj).show();
}
function showUserCheckDetail(obj){
    $.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/show.do",
	type : "post",
	data : {
		"u_id" : obj
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		  $("#alert_uname").val(result.data.u_name);
		  $("#alert_urealname").val(result.data.u_realName);
		  $("#alert_location").val(result.data.u_location);
		  $("#alert_phone").val(result.data.u_phone);
		  $("#alert_mail").val(result.data.u_mail);
		  $("#alert_desc").val(result.data.u_desc);
		}
	}
});
}
function saveFn(obj){
 $(".hideid").val(obj);
}
function agreeAdd(){
var u_id=$("#hideid").val();
   $.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/agreeadd.do",
	type : "post",
	data : {
		"u_id" : u_id
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		 searchCheckUsers();
		}else{
		 alert("操作失败！");
		}
	}
});
}
function refuse(){
	$("#refuseModal").modal('hide');
  u_id=$(".hideid").val();
    $.ajax({
	url : "http://localhost:8080/MonitorPortWeb/user/deluser.do",
	type : "post",
	data : {
		"u_id" : u_id
	},
	dataType : "json",
	async : true,
	success : function(result) {
	
		if (result.state == 0) {
		$("#refuseModal").modal('hide')
		 searchCheckUsers();
		}else{
		 alert("操作失败！");
		}
	}
}); 
}





//用户更新审核
function showUpdUser(pageIndex){
	$.ajax({
		url : "http://localhost:8080/MonitorPortWeb/user/showupd.do",
		type : "post",
		data : {
			"currentPage" : pageIndex,
			"pageSize" : 5,
		},
		dataType : "json",
		async : true,
		success : function(result) {
			if (result.state == 0) {
				$("#userupds").empty();
				var msgs = result.data;
				for ( var i = 0; i < msgs.length; i++) {
					var u_id = msgs[i].u_id;
					var up_name = msgs[i].up_name;
					var up_realName = msgs[i].up_realName;
					var up_location = msgs[i].up_location;
					var up_phone = msgs[i].up_phone;
					var up_mail = msgs[i].up_mail;
					//var u_desc = msgs[i].u_desc;
					var user ='<tr>'+
					'<td>'+u_id+'</td>'+
					'<td>'+up_name+'</td>'+
					'<td>'+up_realName+'</td>'+
					'<td>'+up_phone+'</td>'+
					'<td>'+up_mail+'</td>'+
					'<td>'+up_location+'</td>'+
					'<td>'+
						'<div class="btn-group" role="group">'+
							'<button type="button" class="btn btn-success" onclick="agreeUp('+u_id+')"'+
							'>同意</button>'+
						'</div>'+
					'</td>'+
				'</tr>';
					var $user = $(user);
					//$user.data("u_id", u_id);
					$("#userupds").append($user);
				}
			}
			var totalPage=result.page.totalPage;
			$("#allPageup").html(totalPage);

		}
	});

}

function getUserUpCount(){
	  $.ajax({
		url : "http://localhost:8080/MonitorPortWeb/user/getupcount.do",
		type : "post",
		dataType : "json",
		success : function(result) {
		
			if (result.state == 0) {
			$("#totalCountup").html(result.data);
				var totalNum = result.data;
				createPageForUserUpd(5, 5, totalNum);
			}
			if(result.state==1){
			$("#totalCountup").html(0);
			$("#allPageup").html(0);
			}

		}
	});
	}

function agreeUp(u_id){
	  $.ajax({
		url : "http://localhost:8080/MonitorPortWeb/user/agreeup.do",
		type : "post",
		data:{"u_id":u_id},
		dataType : "json",
		success : function(result) {
		
			if (result.state == 0) {
				showUpds();
			}
			if(result.state==1){
			$("#totalCountup").html(0);
			$("#allPageup").html(0);
			}

		}
	});
	}

function createPageForUserUpd(pageSize, buttons, total) {
	$("#userPageUp").jBootstrapPage({
		pageSize : pageSize,
		total : total,
		maxPageButton : buttons,
		onPageClicked : function(obj, pageIndex) {
		    $("#currentPageup").html(pageIndex+1);
			// 点击页数执行操作
			
		    showUpdUser(pageIndex+1);
			
			

		}
	});
}
function showUpds(){
	getUserUpCount();
	showUpdUser(1);
	$("#currentPageup").html(1);
	
}


