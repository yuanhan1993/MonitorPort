var rootUrl="http://localhost:8080/MonitorPortWeb";
//创建分页
function createPageForAlarm(pageSize, buttons, total) {
	$("#msgPage").jBootstrapPage({
		pageSize : pageSize,
		total : total,
		maxPageButton : buttons,
		onPageClicked : function(obj, pageIndex) {
			$("#currentPage").html(pageIndex + 1);
			// 点击页数执行操作
			showMsg(pageIndex + 1);

		}
	});
}
function getAlarmCount() {
	var m_location = $("#mlocation").val();
	var m_status = $("#selectstatus").val();
	var u_id = $("#uid").val();
	$.ajax({
		url : "http://localhost:8080/MonitorPortWeb/message/getcount.do",
		type : "post",
		data : {
			"m_location" : m_location,
			"m_status" : m_status,
			"u_id" : u_id,
		},
		dataType : "json",
		success : function(result) {
			if (result.state == 0) {
				$("#totalCount").html(result.data);
				var totalNum = result.data;
				createPageForAlarm(5, 5, totalNum);
			} else {
				$("#totalCount").html(0);
				$("#allPage").html(0);
			}

		}
	});
}
function showAlarms(pageIndex) {
	var m_location = $("#mlocation").val();
	var m_status = $("#selectstatus").val();
	var u_id = $("#uid").val();

	$
			.ajax({
				url : "http://localhost:8080/MonitorPortWeb/message/show.do",
				type : "post",
				data : {
					"m_location" : m_location,
					"m_status" : m_status,
					"u_id" : u_id,
					"currentPage" : pageIndex,
					"pageSize" : 5,
				},
				dataType : "json",
				success : function(result) {
					if (result.state == 0) {
						$("#messages").empty();
						var msgs = result.data;
						for ( var i = 0; i < msgs.length; i++) {
							var m_id = msgs[i].m_id;
							var u_id = msgs[i].u_id;
							var m_time = msgs[i].m_time;
							var m_msg = msgs[i].m_msg;
							var m_location = msgs[i].m_location;
							var m_status = msgs[i].m_status;
							var m_result = msgs[i].m_result;
							var m_video = msgs[i].m_video;
							if (m_status == "0") {
								m_status = "未处理";
							} else {
								m_status = "已处理";
							}
							// 处理日期格式
							var time = formatDateTime(new Date(m_time));
							var msg = '<tr><td>'
									+ m_id
									+ '</td>'
									+ '<td>'
									+ u_id
									+ '</td>'
									+ '<td>'
									+ time
									+ '</td>'
									+ '<td>'
									+ m_msg
									+ '</td>'
									+ '<td>'
									+ m_location
									+ '</td>'
									+ '<td>'
									+ m_status
									+ '</td>'
									+ '<td>'
									+ m_result
									+ '</td>'
									+ '<td><a href="#videoModal" data-toggle="modal" onclick="showVideo(this)">'
									+ m_video + '</a></td></tr>';
							var $msg = $(msg);
							$msg.data("u_id", u_id);
							$msg.data("m_video", m_video);
							$("#messages").append($msg);
							var totalPage = result.page.totalPage;
							$("#allPage").html(totalPage);
						}
					} else {
						$("#messages").empty();
						$("#totalCount").html(0);
						$("#allPage").html(0);
					}

				}
			});
}
function showMsg(pageIndex) {
	showAlarms(pageIndex);
}
function showAlarmInput(obj) {

	if (obj == mlocation) {
		$("#searchItem").html("地点");
	} else if (obj == mstatus) {
		$("#searchItem").html("处理状态");
	} else {
		$("#searchItem").html("用户id");
	}

	$("#group input").val("");
	// $("#selectFlag").get(0).selectedIndex=0;
	$("#mlocation").hide();
	$("#mstatus").hide();
	$("#uid").hide();
	$("#group").find(obj).show();
}
function searchAlarms() {
	$("#currentPage").html(1);
	getAlarmCount();
	showAlarms(1);
}
function showVideo(obj) {
	var u_id = $(obj).parent().parent().data("u_id");
	var m_video = $(obj).parent().parent().data("m_video");
	var path = "http://localhost:8080/MonitorPortWeb/media/" + u_id + "/"
			+ m_video + ".mp4";
	$("#videoSrc").prop('src', path);
}
function alarmFns() {
	getAlarmCount();
	showAlarms(1);
	$("#currentPage").html(1);
	$("#mstatus").hide();
	$("#uid").hide();
}