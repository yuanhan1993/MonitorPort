function aquestionFns(){
	getQuestionCount();
	showQuestion(1);
	$("#currentPage").html(1);
	$("#rflag").hide();
	$("#utitle").show();
	
	//监听模态框关闭事件
	$('#addquestionModal').on('hidden.bs.modal', function (e) {
   clearquestionModal();
});
//日期插件
   $('#add_rdate').datetimepicker({ 
        minView: "month", //选择日期后，不会再跳转去选择时分秒 
        format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
        language: 'zh-CN', //汉化 
        autoclose:true //选择日期后自动关闭 
});	
}

//创建分页
function createPageForQuestion(pageSize, buttons, total) {
	$("#userallPage").jBootstrapPage({
		pageSize : pageSize,
		total : total,
		maxPageButton : buttons,
		onPageClicked : function(obj, pageIndex) {
			$("#currentPage").html(pageIndex + 1);
			// 点击页数执行操作
				showQuestion(pageIndex + 1);

		}
	});
}
//查询用户数目
function getQuestionCount() {
	
   var r_flag = $("#qselectFlag").val();
   var u_title=$("#utitle").val();
	$
			.ajax({
				url : "http://localhost:8080/MonitorPortWeb/question/getsearchcount.do",
				type : "post",
				data : {
					"u_title" : u_title,
					"r_flag":r_flag
				},
				dataType : "json",
				async : true,
				success : function(result) {

					if (result.state == 0) {
						$("#totalCount").html(result.data);
						var totalNum = result.data;
						createPageForQuestion(5, 5, totalNum);
					}
					if (result.state == 1) {
						$("#totalCount").html(0);
						$("#allPage").html(0);
					}

				}
			});
}
//查询用户
function showQuestion(pageIndex) {

	 var r_flag = $("#qselectFlag").val();
   var u_title=$("#utitle").val();

	$
			.ajax({
				url : "http://localhost:8080/MonitorPortWeb/question/showquestion.do",
				type : "post",
				data : {
					"currentPage" : pageIndex,
					"pageSize" : 5,
					"u_title" : u_title,
					"r_flag":r_flag
				},
				dataType : "json",
				async : true,
				success : function(result) {
					if (result.state == 0) {
						$("#questions").empty();
						var msgs = result.data;
						for ( var i = 0; i < msgs.length; i++) {
							var r_id = msgs[i].r_id;
							var u_id = msgs[i].u_id;
							var u_title = msgs[i].u_title;
							//var r_answer = msgs[i].r_answer;
							var r_date = msgs[i].r_date;
							var r_flag = msgs[i].r_flag;
							//是否回复
							var has_answer="否";
							//类型
							if (r_flag== "1") {
								flag = "系统提醒";
								has_answer="--";
							} else if(r_flag=="0"){
								flag = "反馈";
								 has_answer="是";
							}else if(r_flag=="2"){
							    flag = "反馈"; 
							    has_answer="否";
							}
							var date = new Date(r_date);
						    r_date = formatDate(date);
							var notice = '<tr>' + '<td>'
									+ r_id
									+ '</td>'
									+ '<td>'
									+ u_id
									+ '</td>'
									+ '<td style="width:200px;">'
									+ u_title
									+ '</td>'
									+ '<td>'
									+ has_answer
									+ '</td>'
									+ '<td>'
									+ r_date
									+ '</td>'
									+ '<td>'
									+ flag
									+ '</td>'
									+ '<td>'
									+ '<div class="btn-group" role="group">'
									+ '<button type="button" class="btn btn-info" data-toggle="modal" data-target="#questionModal" onclick="showQuestionDetail('
									+ r_id
									+ ')">详情</button>'
									+ '<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delquestionModal" onclick="saveFn('
									+ r_id + ')">删除</button>'
									+ '</div>'
									+ '</td>' + '</tr>';
							var $notice = $(notice);
							//$user.data("u_id", u_id);
							$("#questions").append($notice);
							var totalPage = result.page.totalPage;
							$("#allPage").html(totalPage);
						}
					} else if (result.state == 1) {
						$("#questions").empty();
						$("#totalCount").html(0);
						$("#allPage").html(0);
					}

				}
			});
}
function searchQuestion() {
	$("#currentPage").html(1);
	getQuestionCount();
	showQuestion(1);
}
function showQuestionInput(obj) {

	if (obj == utitle) {
		$("#searchItem").html("标题");
	} else {
		$("#searchItem").html("类型");
	}

	$("#group input").val("");
	//$("#qselectFlag").get(0).selectedIndex=0;
	$("#utitle").hide();
	$("#rflag").hide();
	$("#group").find(obj).show();
}
function showQuestionDetail(obj) {
   
	$.ajax({
		url : "http://localhost:8080/MonitorPortWeb/question/findbyrid.do",
		type : "post",
		data : {
			"r_id" : obj
		},
		dataType : "json",
		async : true,
		success : function(result) {
			if (result.state == 0) {
			var rDate=formatDate(new Date(result.data.r_date));
			if(result.data.r_flag=="1"){
			   $("#toAnswer").hide();
			   $("#alert_rflag").get(0).selectedIndex=0;
			}else if(result.data.r_flag=="2"){
			   $("#toAnswer").show();
			   $("#alert_rflag").get(0).selectedIndex=1;
			}else{
			    $("#toAnswer").hide();
			   $("#alert_rflag").get(0).selectedIndex=1;
			}
				$("#alert_rid").val(result.data.r_id);
				$("#alert_uid").val(result.data.u_id);
				$("#alert_utitle").val(result.data.u_title);
				$("#alert_uquestion").val(result.data.u_question);
				$("#alert_ranswer").val(result.data.r_answer);
				$("#alert_responser").val(result.data.r_responser);
				$("#alert_rdate").val(rDate);
				
			}
		}
	});
}
function saveFn(obj) {
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
		 searchQuestion();
		}else{
		 alert("操作失败！");
		}
	}
});
} */
function delQuestion() {
	
	var r_id = $(".hideid").val();
	$.ajax({
		url : "http://localhost:8080/MonitorPortWeb/question/delQuestion.do",
		type : "post",
		data : {
			"r_id" :r_id
		},
		dataType : "json",
		async : true,
		success : function(result) {

			if (result.state == 0) {
			$("#delquestionModal").modal('hide');
				searchQuestion();
			} else {
				alert("操作失败！");
			}
		}
	});
}


function addSystemQuestion(){
	var u_id=$("#add_user").val();
	var u_title=$("#add_utitle").val();
	var u_question=$("#add_uquestion").val();
	var r_answer=$("#add_ranswer").val();
	var r_responser=$("#add_responser").val();
	var r_date=$("#add_rdate").val();
var isOk=true;
if(u_id==""||u_title==""||u_question==""||r_answer==""||r_responser==""||r_date==""
||u_id==null||u_title==null||u_question==null||r_answer==null||r_responser==null||r_date==null){
 isOk=false;
 alert("不能有空值！");
}
if(isOk==true){
   $.ajax({
		url : "http://localhost:8080/MonitorPortWeb/question/addsysq.do",
		type : "post",
		data : {
			"u_id" : u_id,
			"u_title":u_title,
			"u_question":u_question,
			"r_answer":r_answer,
			"r_responser":r_responser,
			"r_date":r_date,
			"r_flag":1,
		},
		dataType : "json",
		success : function(result) {

			if (result.state == 0) {
			    alert("操作成功！");
			    $('#addquestionModal').modal('hide');
			    searchQuestion();
			} else {
				alert("操作失败！");
			}
		}
	});
}


}

function modifyQuestion(){
var r_answer=$("#alert_ranswer").val();
var r_responser=$("#alert_responser").val();
var r_id=$("#alert_rid").val();
var isOk=true;
if(r_answer==""||r_responser==""||r_answer==null||r_responser==null){
 isOk=false;
 alert("不能有空值！");
}
if(isOk==true){
   $.ajax({
		url : "http://localhost:8080/MonitorPortWeb/question/updateq.do",
		type : "post",
		data : {
			"r_answer":r_answer,
			"r_responser":r_responser,
			"r_id":r_id,
			"r_flag":0
		},
		dataType : "json",
		success : function(result) {

			if (result.state == 0) {
			    alert("操作成功！");
			    $('#questionModal').modal('hide');
			    searchQuestion();
			} else {
				alert("操作失败！");
			}
		}
	});
}
}

function clearquestionModal(){
  $("#addquestionForm input").val("");
  $("#addquestionForm textarea").val("");
}

//动态生成用户列表
function showUser(){
   $.ajax({
		url : "http://localhost:8080/MonitorPortWeb/user/show.do",
		type : "post",
		data : {
			"u_hasflag":0
		},
		dataType : "json",
		success : function(result) {

			if (result.state == 0) {
			    $("#add_user").empty();
				var msgs = result.data;
				for ( var i = 0; i < msgs.length; i++) {
				   var u_id=msgs[i].u_id;
				   var u_name=msgs[i].u_name;
				   var user='<option value="'+u_id+'">'+u_id+" "+u_name+'</option>';
				   $user=$(user);
				   $("#add_user").append($user);
				}
			} else {
				alert("操作失败！");
			}
		}
	});
}