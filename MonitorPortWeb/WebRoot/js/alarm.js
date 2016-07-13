//查找信息数目并生成分页
function createPagesByCount() {
	var u_id=window.localStorage.getItem("uid");
	// 查找信息总数
	$.ajax({
		url : "http://localhost:8080/MonitorPortWeb/message/getcount.do",
		type : "post",
		data : {
			"u_id" : u_id
		},
		dataType : "json",
		async : true,
		success : function(result) {
			if (result.state == 0) {
				var totalNum = result.data;
				createPageForAlarm(8, 5, totalNum);
			}

		}
	});
}
// 创建分页
function createPageForAlarm(pageSize, buttons, total) {
	$("#alarmPage").jBootstrapPage({
		pageSize : pageSize,
		total : total,
		maxPageButton : buttons,
		onPageClicked : function(obj, pageIndex) {
			// 点击页数执行操作
			showVideoList(pageIndex + 1);
		}
	});
}
// 根据页面刷新报警信息
function showVideoList(pageIndex) {
	
	
	var u_id=window.localStorage.getItem("uid");
		var m_location = $("#slocation").val();
		$
				.ajax({
					url : "http://localhost:8080/MonitorPortWeb/message/show.do",
					type : "post",
					data : {
						"u_id" : u_id,
						"currentPage" : pageIndex,
						"pageSize" : 8,
						"m_location" : m_location
					},
					dataType : "json",
					async : true,
					success : function(result) {
						if (result.state == 0) {
							$("#test").empty();
							var msgs = result.data;
							for ( var i = 0; i < msgs.length; i++) {
								var m_id = msgs[i].m_id;
								var m_time = msgs[i].m_time;
								var m_msg = msgs[i].m_msg;
								var m_location = msgs[i].m_location;
								var m_result = msgs[i].m_result;
								var m_video = msgs[i].m_video;
								// 处理日期格式
								var time = formatDateTime(new Date(m_time));
								var video = '<div class="col-xs-6 col-md-3">'
										+ '<a href="JavaScript:void(0);" class="thumbnail" id="'
										+ m_video
										+ '" onclick="showVideoDetail(this)")>'
										+ '<img src="./images/videoimg.png" alt="...">'
										+ '</a>' + '<div class="tip">'
										+ '<p class="title">' + time + '</p>'
										+ '</div>' + ' </div>';
								var $video = $(video);
								$video.data("m_id", m_id);
								$video.data("m_msg", m_msg);
								$video.data("m_location", m_location);
								$video.data("m_result", m_result);
								$video.data("m_time", time);
								$("#test").append($video);

							}
						}

					}
				});
}

// 在主页上显示最新视频信息
function showHomeVideoList() {
	
	var u_id=window.localStorage.getItem("uid");
		var m_location = $("#slocation").val();
$.ajax({
					url : "http://localhost:8080/MonitorPortWeb/message/show.do",
					type : "post",
					data : {
						"u_id" : u_id,
						"currentPage" : 1,
						"pageSize" : 3,
						"m_location" : m_location
					},
					dataType : "json",
					async : true,
					success : function(result) {
						if (result.state == 0) {
							$("#home_message").empty();
							var msgs = result.data;
							for ( var i = 0; i < msgs.length; i++) {
								var m_id = msgs[i].m_id;
								var m_time = msgs[i].m_time;
								var m_msg = msgs[i].m_msg;
								var m_location = msgs[i].m_location;
								var m_result = msgs[i].m_result;
								var m_video = msgs[i].m_video;
								// 处理日期格式
								var time = formatDateTime(new Date(m_time));
								var video ='<p><a href="#homealarmModal" data-toggle="modal" onclick="showHomeVideoDetail(this)">'+m_location+'<span class="vt">'+time+'</span></a></p>';
								var $video = $(video);
								$video.data("m_id", m_id);
								$video.data("m_msg", m_msg);
								$video.data("m_location", m_location);
								$video.data("m_result", m_result);
								$video.data("m_time", time);
								$video.data("m_video",m_video);
								$("#home_message").append($video);

							}
							var btn=' <a id="moreAlarm" class="pull-right" href="JavaScript:void(0);" onclick="toAlarm();">'+
								'<img src="./images/more.png"/>'+
								'</a>';
							$("#home_message").append($(btn));
						}

					}
				});
	

}

// 显示视频详情
function showVideoDetail(clickObj) {
	var video = $(clickObj).attr("id") + ".mp4";
	var m_msg = $(clickObj).parent().data("m_msg");
	var m_location = $(clickObj).parent().data("m_location");
	var m_result = $(clickObj).parent().data("m_result");
	var m_time = $(clickObj).parent().data("m_time");
	var m_id = $(clickObj).parent().data("m_id");
	// 将id赋值给模态框的隐藏元素
	$("#mid").val(m_id);
	$("#mlocation").html(m_location);
	$("#mresult").html(m_result);
	$("#mtime").html(m_time);
	$("#mmsg").html(m_msg);

	$("#videoList").hide();
	$("#videoShow").fadeIn(200);

	$("#videoSrc").prop('src',
			'http://localhost:8080/MonitorPortWeb/media/1/' + video);
	//$("#videoSrc").prop('poster',
	//		'http://localhost:8080/MonitorPortWeb/images/videoimg.png');
}

function showHomeVideoDetail(clickObj){
	var video = $(clickObj).parent().data("m_video") + ".mp4";
	var m_msg = $(clickObj).parent().data("m_msg");
	var m_location = $(clickObj).parent().data("m_location");
	var m_result = $(clickObj).parent().data("m_result");
	var m_time = $(clickObj).parent().data("m_time");
	var m_id = $(clickObj).parent().data("m_id");
	// 将id赋值给模态框的隐藏元素
	$("#mid").val(m_id);
	$("#hmlocation").html(m_location);
	$("#hmresult").html(m_result);
	$("#hmtime").html(m_time);
	$("#hmmsg").html(m_msg);

	$("#videoSrc").prop('src',
			'http://localhost:8080/MonitorPortWeb/media/1/' + video);
	//$("#videoSrc").prop('poster',
	//		'http://localhost:8080/MonitorPortWeb/media/test.jpg');
}

// 关闭事件
function closedealModal() {
	$("#videoSrc").prop('src','');
	$("#dresult").val("");
	$("#dealmsg").attr("disabled", false);
	$("#warning-dealmsg").html("");
	$("#warning-deal").attr("class", "alert alert-danger hide");
}
// 提交处理结果
function dealMsg() {
	var m_result = $("#dresult").val();
	var m_id = $("#mid").val();
	var isOk = true;
	if (m_result == null || m_result == "") {
		isOk = false;
		$("#warning_dealmsg").html("请输入内容");
		$("#warning-deal").attr("class", "alert alert-danger");
	}
	if (isOk == true) {
		$
				.ajax({
					url : "http://localhost:8080/MonitorPortWeb/message/deal.do",
					type : "post",
					async : true,
					data : {
						"m_id" : m_id,
						"m_result" : m_result
					},
					dataType : "json",
					success : function(result) {
						if (result.state == 0) {
							$("#mresult").html($("#dresult").val());
							$("#warning-deal").attr("class",
									"alert alert-success");
							$("#warning_dealmsg")
									.html(
											"<span class='glyphicon glyphicon-ok'></span>&nbsp;提交成功！");
							$("#dealmsg").attr("disabled", true);

						}

					}
				});
	}
}
// 查找
function searchLocation() {
	var m_location = $("#slocation").val();
	var isOk = true;
	if (m_location == null && m_location == "") {
		isOk == false;
	}
	if (isOk == true) {
		// 搜索
		createPagesByCountForSearch(m_location)
		showVideoList(1);
	}

}
// 根据查找内容获得总数
function createPagesByCountForSearch(m_location) {
	var u_id=window.localStorage.getItem("uid");
	// 查找信息总数
	$.ajax({
		url : "http://localhost:8080/MonitorPortWeb/message/getcount.do",
		type : "post",
		async : true,
		data : {
			"u_id" : u_id,
			"m_location" : m_location
		},
		dataType : "json",
		success : function(result) {
			if (result.state == 0) {
				var totalNum = result.data;
				if (totalNum == 0) {
					// 提示未搜索到内容
					$(".pagination").html(
							'<span style="color:red">搜索到内容为空。。。。</span>');
				} else {
					$(".pagination").empty();
					createPage(8, 5, totalNum);
				}

			}

		}
	});
}