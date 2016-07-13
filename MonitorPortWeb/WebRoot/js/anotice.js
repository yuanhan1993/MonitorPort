function anoticeFns(){
	getNoticeCount();
	showNotice(1);
	$("#currentPage").html(1);
	$("#nflag").hide();
	$("#ntitle").show();
	
	//监听模态框关闭事件
	$('#addnoticeModal').on('hidden.bs.modal', function (e) {
   clearmodal();
});
	
	
	//日期
	$('#alert_startDate').datetimepicker({ 
        minView: "month", //选择日期后，不会再跳转去选择时分秒 
        format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
        language: 'zh-CN', //汉化 
        autoclose:true //选择日期后自动关闭 
}).on("click",function(ev){
$("#alert_startDate").datetimepicker("setEndDate", $("#alert_endDate").val());
});
$('#alert_endDate').datetimepicker({ 
        minView: "month", //选择日期后，不会再跳转去选择时分秒 
        format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
        language: 'zh-CN', //汉化 
        autoclose:true //选择日期后自动关闭 
}).on("click", function (ev) {
$("#alert_endDate").datetimepicker("setStartDate", $("#alert_startDate").val());
});
$('#alert_npublishDate').datetimepicker({ 
        minView: "month", //选择日期后，不会再跳转去选择时分秒 
        format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
        language: 'zh-CN', //汉化 
        autoclose:true //选择日期后自动关闭 
}).on("click", function (ev) {
$("#alert_npublishDate").datetimepicker("setStartDate", $("#alert_startDate").val());
$("#alert_npublishDate").datetimepicker("setEndDate", $("#alert_endDate").val());
});

$('#add_startDate').datetimepicker({ 
        minView: "month", //选择日期后，不会再跳转去选择时分秒 
        format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
        language: 'zh-CN', //汉化 
        autoclose:true //选择日期后自动关闭 
}).on("click",function(ev){
$("#add_startDate").datetimepicker("setEndDate", $("#add_endDate").val());
});
$('#add_endDate').datetimepicker({ 
        minView: "month", //选择日期后，不会再跳转去选择时分秒 
        format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
        language: 'zh-CN', //汉化 
        autoclose:true //选择日期后自动关闭 
}).on("click", function (ev) {
$("#add_endDate").datetimepicker("setStartDate", $("#add_startDate").val());
});
$('#add_npublishDate').datetimepicker({ 
        minView: "month", //选择日期后，不会再跳转去选择时分秒 
        format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
        language: 'zh-CN', //汉化 
        autoclose:true //选择日期后自动关闭 
}).on("click", function (ev) {
$("#add_npublishDate").datetimepicker("setStartDate", $("#add_startDate").val());
$("#add_npublishDate").datetimepicker("setEndDate", $("#add_endDate").val());
});
}


//创建分页
function createPageForNotice(pageSize, buttons, total) {
	$("#userallPage").jBootstrapPage({
		pageSize : pageSize,
		total : total,
		maxPageButton : buttons,
		onPageClicked : function(obj, pageIndex) {
			$("#currentPage").html(pageIndex + 1);
			// 点击页数执行操作
			if (isSearch == false) {
				showNotice(pageIndex + 1);
			}

		}
	});
}
//查询用户数目
function getNoticeCount() {
	//var n_flag = $("#nflag").val();
	var n_title = $("#ntitle").val();
   var n_flag = $("#selectFlag").val();
	$
			.ajax({
				url : "http://localhost:8080/MonitorPortWeb/notice/getallcount.do",
				type : "post",
				data : {
					"n_flag" : n_flag,
					"n_title" : n_title
				},
				dataType : "json",
				async : true,
				success : function(result) {

					if (result.state == 0) {
						$("#totalCount").html(result.data);
						var totalNum = result.data;
						createPageForNotice(5, 5, totalNum);
					}
					if (result.state == 1) {
						$("#totalCount").html(0);
						$("#allPage").html(0);
					}

				}
			});
}
//查询用户
function showNotice(pageIndex) {

	var n_flag = $("#selectFlag").val();
	var n_title = $("#ntitle").val();

	$
			.ajax({
				url : "http://localhost:8080/MonitorPortWeb/notice/search.do",
				type : "post",
				data : {
					"currentPage" : pageIndex,
					"pageSize" : 5,
					"n_flag" : n_flag,
					"n_title" : n_title
				},
				dataType : "json",
				async : true,
				success : function(result) {
					if (result.state == 0) {
						$("#notices").empty();
						var msgs = result.data;
						for ( var i = 0; i < msgs.length; i++) {
							var n_id = msgs[i].n_id;
							var n_title = msgs[i].n_title;
							var n_shortContent = msgs[i].n_shortContent;
							var n_publishDate = msgs[i].n_publishDate;
							var n_flag = msgs[i].n_flag;
							var n_publisher = msgs[i].n_publisher;
							var flag = "";
							if (n_flag == 1) {
								flag = "已发布";
							} else {
								flag = "未发布";
							}
							var date = new Date(n_publishDate);
							var publishDate = formatDate(date);
							var notice = '<tr>' + '<td>'
									+ n_id
									+ '</td>'
									+ '<td>'
									+ n_title
									+ '</td>'
									+ '<td style="width:200px;">'
									+ n_shortContent
									+ '</td>'
									+ '<td>'
									+ publishDate
									+ '</td>'
									+ '<td>'
									+ flag
									+ '</td>'
									+ '<td>'
									+ n_publisher
									+ '</td>'
									+ '<td>'
									+ '<div class="btn-group" role="group">'
									+ '<button type="button" class="btn btn-info" data-toggle="modal" data-target="#noticeModal" onclick="showNoticeInfo('
									+ n_id
									+ ')">详情</button>'
									+ '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#noticeModal" onclick="showNoticeModify('
									+ n_id
									+ ')">修改</button>'
									+ '<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delNoticeModal" onclick="saveFn('
									+ n_id + ')">删除</button>' + '</div>'
									+ '</td>' + '</tr>';
							var $notice = $(notice);
							//$user.data("u_id", u_id);
							$("#notices").append($notice);
							var totalPage = result.page.totalPage;
							$("#allPage").html(totalPage);
						}
					} else if (result.state == 1) {
						$("#notices").empty();
						$("#totalCount").html(0);
						$("#allPage").html(0);
					}

				}
			});
}
function searchNotice() {
	$("#currentPage").html(1);
	getNoticeCount();
	showNotice(1);
}
function showInput(obj) {

	if (obj == ntitle) {
		$("#searchItem").html("标题");
	} else {
		$("#searchItem").html("是否发布");
	}

	$("#group input").val("");
	//$("#selectFlag").get(0).selectedIndex=0;
	$("#ntitle").hide();
	$("#nflag").hide();
	$("#group").find(obj).show();
}
function showNoticeDetail(obj) {
   
	$.ajax({
		url : "http://localhost:8080/MonitorPortWeb/notice/findbyid.do",
		type : "post",
		data : {
			"n_id" : obj
		},
		dataType : "json",
		async : true,
		success : function(result) {
			if (result.state == 0) {
			var date = new Date(result.data.n_publishDate);
			var publishDate = formatDate(date);
			var startDate=formatDate(new Date(result.data.n_startDate));
			var endDate=formatDate(new Date(result.data.n_endDate));
			
			if(result.data.n_flag==1){
			   $("#alert_nflag").get(0).selectedIndex=0;
			}else{
			   $("#alert_nflag").get(0).selectedIndex=1;
			}
				$("#alert_nid").val(result.data.n_id);
				$("#alert_ntitle").val(result.data.n_title);
				$("#alert_nshortContent").val(result.data.n_shortContent);
				$("#alert_ncontent").val(result.data.n_content);
				$("#alert_startDate").val(startDate);
				$("#alert_endDate").val(endDate);
				$("#alert_npublishDate").val(publishDate);
				$("#alert_npublisher").val(result.data.n_publisher);
				
			}
		}
	});
}
function saveFn(obj) {
	$(".hideid").val(obj);
	$("#reason").val("");
}
function delNotice() {
	
	var n_id = $(".hideid").val();
	$.ajax({
		url : "http://localhost:8080/MonitorPortWeb/notice/delnotice.do",
		type : "post",
		data : {
			"n_id" :n_id
		},
		dataType : "json",
		async : true,
		success : function(result) {

			if (result.state == 0) {
			$("#delNoticeModal").modal('hide');
				searchNotice();
			} else {
				alert("操作失败！");
			}
		}
	});
}


function modifyNotice(){
var n_id=$("#alert_nid").val();
var n_title=$("#alert_ntitle").val();
var n_shortContent=$("#alert_nshortContent").val();
var n_content=$("#alert_ncontent").val();
var n_startDate=$("#alert_startDate").val();
var n_endDate=$("#alert_endDate").val();
var n_publishDate=$("#alert_npublishDate").val();
var n_publisher=$("#alert_npublisher").val();
var n_flag=$("#alert_nflag").val();
if(n_flag=="发布"){
 n_flag="1";
}else{
 n_flag="0";
}
var isOk=true;
if(n_title==""||n_shortContent==""||n_content==""||n_startDate==""||n_endDate==""||n_publishDate==""||n_publisher==""
||n_title==null||n_shortContent==null||n_content==null||n_startDate==null||n_endDate==null||n_publishDate==null||n_publisher==null){
 isOk=false;
 alert("不能有空值！");
}
if(isOk==true){
   $.ajax({
		url : "http://localhost:8080/MonitorPortWeb/notice/updatenotice.do",
		type : "post",
		data : {
			"n_id" : n_id,
			"n_title":n_title,
			"n_shortContent":n_shortContent,
			"n_content":n_content,
			"n_startDate":n_startDate,
			"n_endDate":n_endDate,
			"n_publishDate":n_publishDate,
			"n_publisher":n_publisher,
			"n_flag":n_flag
		},
		dataType : "json",
		success : function(result) {

			if (result.state == 0) {
			    alert("操作成功！");
			    $('#noticeModal').modal('hide')
			    searchNotice();
			} else {
				alert("操作失败！");
			}
		}
	});
}


}
function showNoticeModify(obj){
  $("#nmodalTitle").html("修改信息");
  $("#toChange").show();
  $("#noticeModal").css("color","#F0AD4E");
  showNoticeDetail(obj);
}
function showNoticeInfo(obj){
 $("#nmodalTitle").html("详细信息");
 $("#toChange").hide();
  $("#noticeModal").css("color","##337AB7");
$("#userallForm input").attr("disabled", true);
 showNoticeDetail(obj);
}
function addNotice(){
var n_title=$("#add_ntitle").val();
var n_shortContent=$("#add_nshortContent").val();
var n_content=$("#add_ncontent").val();
var n_startDate=$("#add_startDate").val();
var n_endDate=$("#add_endDate").val();
var n_publishDate=$("#add_npublishDate").val();
var n_publisher=$("#add_npublisher").val();
var n_flag=$("#add_nflag").val();
var isOk=true;
if(n_title==""||n_shortContent==""||n_content==""||n_startDate==""||n_endDate==""||n_publishDate==""||n_publisher==""
||n_title==null||n_shortContent==null||n_content==null||n_startDate==null||n_endDate==null||n_publishDate==null||n_publisher==null){
 isOk=false;
 alert("不能有空值！");
}
if(isOk==true){
   $.ajax({
		url : "http://localhost:8080/MonitorPortWeb/notice/addnotice.do",
		type : "post",
		data : {
			"n_title":n_title,
			"n_shortContent":n_shortContent,
			"n_content":n_content,
			"n_startDate":n_startDate,
			"n_endDate":n_endDate,
			"n_publishDate":n_publishDate,
			"n_publisher":n_publisher,
			"n_flag":n_flag
		},
		dataType : "json",
		success : function(result) {

			if (result.state == 0) {
			    alert("操作成功！");
			    $('#addnoticeModal').modal('hide');
			    searchNotice();
			} else {
				alert("操作失败！");
			}
		}
	});
}
}

function clearmodal(){
  $("#addnoticeForm input").val("");
  $("#addnoticeForm textarea").val("");
}