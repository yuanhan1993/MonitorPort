 //
 function createPage(pageSize, buttons, total) {
        $("#noticePage").jBootstrapPage({
            pageSize : pageSize,
            total : total,
            maxPageButton:buttons,
            onPageClicked: function(obj, pageIndex) {
             //
             showList(pageIndex+1);
            }
        });
    }
    
     //
     function showHomeNoticeList(){
    	 $.ajax({
    	        url:"http://localhost:8080/MonitorPortWeb/notice/show.do",
    	        type:"post",
    	       data:{"currentPage":1,"pageSize":3,"n_flag":1},
    	        dataType:"json",
    	        success:function(result){
    	          if(result.state==0){
    	          $("#home_notice").empty();
    	           var notices=result.data;
    	          
    	           for(var i=0;i<notices.length;i++){
    	           var n_id=notices[i].n_id;
    	           var n_title=notices[i].n_title;
    	           var n_shortContent=notices[i].n_shortContent;
    	           var n_content=notices[i].n_content;
    	           var n_publishDate=notices[i].n_publishDate;
    	           var n_publisher=notices[i].n_publisher;
    	           var n_flag=notices[i].n_flag; 
    	           //
    	           var date=new Date(n_publishDate);
    	           var publishDate=formatDate(date);
    	           var notice='<p><a href="#homenoticeModal" data-toggle="modal" onclick="showHomeNoticeDetail(this)">'+n_title+'<span class="vt">'+publishDate+'</span></a></p>';
    	          
    	          var $notice=$(notice);
    	          $notice.data("n_id",n_id);
    	          $notice.data("n_title",n_title);
    	          $notice.data("n_publishDate",publishDate);
    	          $notice.data("n_publisher",n_publisher);
    	          $notice.data("n_content",n_content);
    	          $("#home_notice").append($notice);
    	           }
    	           var btn=' <a id="moreNotice" class="pull-right" href="JavaScript:void(0);" onclick="toNotice();">'+
					'<img src="./images/more.png"/>'+
					'</a>';
				$("#home_notice").append($(btn));
    	          }
    	        }
    	      });
     }
     function showDetail(n_id){
       
        //
        $.ajax({
		  url:"http://localhost:8080/MonitorPortWeb/notice/findbyid.do",
		  type:"post",
		  data:{"n_id":n_id},
		  dataType:"json",
		  success:function(result){
			if(result.state==0){
			  $("#ntitle").html(result.data.n_title);
			  $("#ncontent").html(result.data.n_content);
			  $("#npublisher").html(result.data.n_publisher);
			  //
			  var date=new Date(result.data.n_publishDate);
			  n_publishDate=formatDate(date);
			  $("#npdate").html(n_publishDate);
			} 
			  
		  },
		  error:function(){
			  alert("查找失败");
		  }
		});
		 $("#noticePage").hide();
		 $(".noticeList").hide();
        $(".noticeDetail").show();
      }
      
     function showHomeNoticeDetail(clickObj){
    	var n_title=$(clickObj).parent().data("n_title");
    	var n_publishDate=$(clickObj).parent().data("n_publishDate");
    	var n_publisher=$(clickObj).parent().data("n_publisher");
    	var n_content=$(clickObj).parent().data("n_content");
    	$("#hntitle").html(n_title);
    	$("#hncontent").html(n_content);
    	$("#hnpublisher").html(n_publisher);
    	$("#hnpdate").html(n_publishDate);
    	 
     }
      //
      function showQuestions(){
       createPagesCountForInfo();
       showQuestionList(1);
      }
     function showQuestionList(indexPage){
     $("#accordion").empty();
     var u_id=window.localStorage.getItem("uid");
     
       $.ajax({
		  url:"http://localhost:8080/MonitorPortWeb/question/findbyuid.do",
		  type:"post",
		  data:{"u_id":u_id,"currentPage":indexPage,"pageSize":4},
		  dataType:"json",
		  success:function(result){
			if(result.state==0){
			 var questionList=result.data;
			 for(var i=0;i<questionList.length;i++){
			    var title=questionList[i].u_title;
			    var question=questionList[i].u_question;
			    var answer=questionList[i].r_answer;
			    var responser=questionList[i].r_responser;
			    var flag=questionList[i].r_flag;
			    var rid=questionList[i].r_id;
			    var date=questionList[i].r_date;
			    //
			    var fdate=new Date(date);
			    var rdate=formatDate(fdate);
			    var questionItem="";
			    if(flag!=null&&flag!=""){
			      if(flag==0){
			    questionItem='<div class="panel panel-default">'+
    '<div class="panel-heading" role="tab" id="'+rid+'">'+
      '<h4 class="panel-title">'+
       ' <a data-toggle="collapse" data-parent="#accordion" href="#collapse'+rid+'" aria-expanded="true" aria-controls="collapse'+rid+'">'+
           '<strong> '+title+'</strong>'+
        '</a>'+
      '</h4>'+
    '</div>'+
    '<div id="collapse'+rid+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'+rid+'">'+
      '<div class="panel-body">'+
        '<div class="media">'+
         '<div class="media-left media-middle">'+
         '<img class="media-object img-circle" src="./images/head/head1.gif" alt="..." width="50" height="50">'+
         '</div>'+
        '<div class="media-body">'+
        '<p class="pull-right time"><span class="glyphicon glyphicon-time"></span>&nbsp;'+rdate+'</p>'+
        '<br>'+
        '<p>Q:'+question+'</p>'+
        '</div>'+
       '</div>'+
       '<div class="answer">'+
         ' <div class="media">'+
         '<div class="media-left media-middle">'+
         '<img class="media-object img-rounded" src="./images/admin.png" alt="..." width="50" height="50">'+
         '</div>'+
        '<div class="media-body">'+
        '<p>'+responser+'</p>'+
        '<p>'+answer+'</p>'+
        '</div>'+
       '</div>'+
       '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
  }
       if(flag==1){
         questionItem='<div class="panel panel-default">'+
    '<div class="panel-heading " role="tab" id="'+rid+'">'+
      '<h4 class="panel-title warning">'+
       ' <a data-toggle="collapse" data-parent="#accordion" href="#collapse'+rid+'" aria-expanded="true" aria-controls="collapse'+rid+'">'+
           '<strong> '+title+'</strong>'+
        '</a>'+
      '</h4>'+
    '</div>'+
    '<div id="collapse'+rid+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'+rid+'">'+
      '<div class="panel-body">'+
        '<label class="pull-right time"><span class="glyphicon glyphicon-time"></span>&nbsp;'+rdate+'</lable>'+
       '<div class="sysWarning">'+
         ' <div class="media">'+
         '<div class="media-left media-middle">'+
         '<img class="media-object img-rounded" src="./images/admin.png" alt="..." width="50" height="50">'+
         '</div>'+
        '<div class="media-body">'+
        '<p>'+responser+'</p>'+
        '<p>'+answer+'</p>'+
        '</div>'+
       '</div>'+
       '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
       
       }
      
			    }else{
			    questionItem='<div class="panel panel-default">'+
    '<div class="panel-heading" role="tab" id="'+rid+'">'+
      '<h4 class="panel-title">'+
       ' <a data-toggle="collapse" data-parent="#accordion" href="#collapse'+rid+'" aria-expanded="true" aria-controls="collapse'+rid+'">'+
           '<strong> '+title+'</strong>'+
        '</a>'+
      '</h4>'+
    '</div>'+
    '<div id="collapse'+rid+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'+rid+'">'+
      '<div class="panel-body">'+
        '<div class="media">'+
         '<div class="media-left media-middle">'+
         '<img class="media-object img-circle" src="./images/head/009.jpg" alt="..." width="50" height="50">'+
         '</div>'+
        '<div class="media-body">'+
        '<p class="pull-right time"><span class="glyphicon glyphicon-time"></span>&nbsp;'+rdate+'</p>'+
        '<br>'+
        '<p>Q:'+question+'</p>'+
        '</div>'+
       '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
			    
			    
			    }
			    
         var $questionItem=$(questionItem);
         $("#accordion").append($questionItem);  
			 }
			} 
			  
		  },
		  error:function(){
			  alert("失败。。。");
		  }
		});
	
     }
     
     //
     function submitQ(){
    	 var u_id=window.localStorage.getItem("uid");
       var u_title=$("#newTitle").val();
       var u_question=$("#newContent").val();
       var u_date=new Date();
       var isOk=true;
       if(u_title==null||u_title==""||u_question==null||u_question==""){
         isOk=false;
      $("#qwarning_msg").html("不允许有空值");
	  $("#qwarning").attr("class","alert alert-danger");
       }
       if(u_id==null){
       alert("请重新登录...");
       isOk=false;
       }
       if(isOk==true){
       $("#qwarning_msg").html("");
       $.ajax({
		  url:"http://localhost:8080/MonitorPortWeb/question/insertq.do",
		  type:"post",
		  data:{"u_id":u_id,"u_title":u_title,"u_question":u_question,"r_date":u_date},
		  dataType:"json",
		  success:function(result){
			if(result.state==0){
	        var msg=result.msg;
	  $("#qwarning").attr("class","alert alert-success");
	  $("#qwarning_msg").html("<span class='glyphicon glyphicon-ok'></span>&nbsp;"+msg+"");
	         $("#subq").attr("disabled",true);
			} 
			  
		  },
		  error:function(){
			  alert("失败。。。");
		  }
		});
		}
     }
     
     //
     function closeQModal(){
        $("#qwarning").attr("class","alert alert-danger hide");
        $("#newTitle").val("");
        $("#newContent").val("");
        //showQuestionList();
     };
     //
     //
function createPagesCountForNotice(){
	var u_id=window.localStorage.getItem("uid");
 //
  $.ajax({
	        url:"http://localhost:8080/MonitorPortWeb/notice/getcount.do",
	        type:"post",
	        data:{"n_flag":1},
	        dataType:"json",
	        success:function(result){
	        	if(result.state==0){
	        	  var totalNum=result.data;
	        	  createPage(4,5,totalNum);
	        	}
	        
	        }
	      });
 }
 


function createInfoPage(pageSize, buttons, total) {
        $("#infoPage").jBootstrapPage({
            pageSize : pageSize,
            total : total,
            maxPageButton:buttons,
            onPageClicked: function(obj, pageIndex) {
             //
             showQuestionList(pageIndex+1);
            }
        });
    }
  //
     //
function createPagesCountForInfo(){
	var u_id=window.localStorage.getItem("uid");
 //
  $.ajax({
	        url:"http://localhost:8080/MonitorPortWeb/question/getcount.do",
	        type:"post",
	       data:{"u_id":u_id},
	        dataType:"json",
	        success:function(result){
	        	if(result.state==0){
	        	  var totalNum=result.data;
	        	  createInfoPage(6,5,totalNum);
	        	}
	        
	        }
	      });
 }
 
  


	 function createPage(pageSize, buttons, total) {
	        $("#noticePage").jBootstrapPage({
	            pageSize : pageSize,
	            total : total,
	            maxPageButton:buttons,
	            onPageClicked: function(obj, pageIndex) {
	             //点击页数执行操作
	             showList(pageIndex+1);
	            }
	        });
	    }
	     function showList(pageIndex){
	        $.ajax({
	        url:"http://localhost:8080/MonitorPortWeb/notice/show.do",
	        type:"post",
	       data:{"currentPage":pageIndex,"pageSize":4,"n_flag":1},
	        dataType:"json",
	        success:function(result){
	          if(result.state==0){
	          $(".noticeList").empty();
	           var notices=result.data;
	           if(notices.length==0){
	        	   $(".noticeList").html("<p style='margin:20px'>暂无最新公告...<p>")
	           }
	           for(var i=0;i<notices.length;i++){
	           var n_id=notices[i].n_id;
	           var n_title=notices[i].n_title;
	           var n_shortContent=notices[i].n_shortContent;
	           var n_publishDate=notices[i].n_publishDate;
	           var n_publisher=notices[i].n_publisher;
	           var n_flag=notices[i].n_flag; 
	           //处理日期格式
	           var date=new Date(n_publishDate);
	           var publishDate=formatDate(date);
	           var notice='<div class="media">'+
	          '<div class="media-left">'+
	          '<a href="JavaScript:void(0);" class="imgNoticeLink" onclick="showDetail('+n_id+')">'+
	          '<img class="media-object" src="./images/noticebg.png" alt="..." width="200" height="100">'+
	          ' <span class="headText">'+n_title+'</span>'+
	          ' </a>'+
	          '</div>'+
	          '<div class="media-body hidden-xs">'+
	          '<p class="msgbody">'+
	          '<span class="head">'+
	          '<a href="JavaScript:void(0);" class="noticeLink" onclick="showDetail('+n_id+')">'+
	          '<strong>'+n_title+'</strong>'+
	          '</a>'+
	          '</span>'+
	          '<small class="pull-right">'+publishDate+'</small>'+
	          '</p>'+
	          '<div class="msg">'+n_shortContent+'</div>'+
	          '</div>'+
	          '</div>';
	          
	          var $notice=$(notice);
	          $(".noticeList").append($notice);
	           }
	          }
	        }
	      });
	     
	     }
	     //主页公告信息列表
	     function showHomeNoticeList(){
	    	 $.ajax({
	    	        url:"http://localhost:8080/MonitorPortWeb/notice/show.do",
	    	        type:"post",
	    	       data:{"currentPage":1,"pageSize":3,"n_flag":1},
	    	        dataType:"json",
	    	        success:function(result){
	    	          if(result.state==0){
	    	          $("#home_notice").empty();
	    	           var notices=result.data;
	    	           for(var i=0;i<notices.length;i++){
	    	           var n_id=notices[i].n_id;
	    	           var n_title=notices[i].n_title;
	    	           var n_shortContent=notices[i].n_shortContent;
	    	           var n_content=notices[i].n_content;
	    	           var n_publishDate=notices[i].n_publishDate;
	    	           var n_publisher=notices[i].n_publisher;
	    	           var n_flag=notices[i].n_flag; 
	    	           //处理日期格式
	    	           var date=new Date(n_publishDate);
	    	           var publishDate=formatDate(date);
	    	           var notice='<p><a href="#homenoticeModal" data-toggle="modal" onclick="showHomeNoticeDetail'+

'(this)">'+n_title+'<span class="vt">'+publishDate+'</span></a></p>';
	    	          
	    	          var $notice=$(notice);
	    	          $notice.data("n_id",n_id);
	    	          $notice.data("n_title",n_title);
	    	          $notice.data("n_publishDate",publishDate);
	    	          $notice.data("n_publisher",n_publisher);
	    	          $notice.data("n_content",n_content);
	    	          $("#home_notice").append($notice);
	    	           }
	    	           var btn=' <a id="moreNotice" class="pull-right" href="JavaScript:void(0);" onclick="toNotice();">'+
						'<img src="./images/more.png"/>'+
						'</a>';
					$("#home_notice").append($(btn));
	    	          }
	    	        }
	    	      });
	     }
	     function showDetail(n_id){
	       
	        //将详细信息显示出来
	        $.ajax({
			  url:"http://localhost:8080/MonitorPortWeb/notice/findbyid.do",
			  type:"post",
			  data:{"n_id":n_id},
			  dataType:"json",
			  success:function(result){
				if(result.state==0){
				  $("#ntitle").html(result.data.n_title);
				  $("#ncontent").html(result.data.n_content);
				  $("#npublisher").html(result.data.n_publisher);
				  //处理日期格式
				  var date=new Date(result.data.n_publishDate);
				  n_publishDate=formatDate(date);
				  $("#npdate").html(n_publishDate);
				} 
				  
			  },
			  error:function(){
				  alert("查询失败！");
			  }
			});
			 $("#noticePage").hide();
			 $(".noticeList").hide();
	        $(".noticeDetail").show();
	      }
	      
	     function showHomeNoticeDetail(clickObj){
	    	var n_title=$(clickObj).parent().data("n_title");
	    	var n_publishDate=$(clickObj).parent().data("n_publishDate");
	    	var n_publisher=$(clickObj).parent().data("n_publisher");
	    	var n_content=$(clickObj).parent().data("n_content");
	    	$("#hntitle").html(n_title);
	    	$("#hncontent").html(n_content);
	    	$("#hnpublisher").html(n_publisher);
	    	$("#hnpdate").html(n_publishDate);
	    	 
	     }
	      //创建分页并显示消息列表
	      function showQuestions(){
	       createPagesCountForInfo();
	       showQuestionList(1);
	      }
	     function showQuestionList(indexPage){
	     $("#accordion").empty();
	     var u_id=window.localStorage.getItem("uid");
	     
	       $.ajax({
			  url:"http://localhost:8080/MonitorPortWeb/question/findbyuid.do",
			  type:"post",
			  data:{"u_id":u_id,"currentPage":indexPage,"pageSize":6},
			  dataType:"json",
			  success:function(result){
				if(result.state==0){
				 var questionList=result.data;
				 for(var i=0;i<questionList.length;i++){
				    var title=questionList[i].u_title;
				    var question=questionList[i].u_question;
				    var answer=questionList[i].r_answer;
				    var responser=questionList[i].r_responser;
				    var flag=questionList[i].r_flag;
				    var rid=questionList[i].r_id;
				    var date=questionList[i].r_date;
				    //日期格式
				    var fdate=new Date(date);
				    var rdate=formatDate(fdate);
				    var questionItem="";
				    if(flag!=null&&flag!=""){
				      if(flag==0){
				    questionItem='<div class="panel panel-default">'+
	    '<div class="panel-heading" role="tab" id="'+rid+'">'+
	      '<h4 class="panel-title">'+
	       ' <a data-toggle="collapse" data-parent="#accordion" href="#collapse'+rid+'" aria-expanded="true" aria-controls="collapse'+rid+'">'+
	           '<strong> '+title+'</strong>'+
	        '</a>'+
	      '</h4>'+
	    '</div>'+
	    '<div id="collapse'+rid+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'+rid+'">'+
	      '<div class="panel-body">'+
	        '<div class="media">'+
	         '<div class="media-left media-middle">'+
	         '<img class="media-object img-circle" src="./images/head/head1.gif" alt="..." width="50" height="50">'+
	         '</div>'+
	        '<div class="media-body">'+
	        '<p class="pull-right time"><span class="glyphicon glyphicon-time"></span>&nbsp;'+rdate+'</p>'+
	        '<br>'+
	        '<p>Q:'+question+'</p>'+
	        '</div>'+
	       '</div>'+
	       '<div class="answer">'+
	         ' <div class="media">'+
	         '<div class="media-left media-middle">'+
	         '<img class="media-object img-rounded" src="./images/admin.png" alt="..." width="50" height="50">'+
	         '</div>'+
	        '<div class="media-body">'+
	        '<p>'+responser+'</p>'+
	        '<p>'+answer+'</p>'+
	        '</div>'+
	       '</div>'+
	       '</div>'+
	      '</div>'+
	    '</div>'+
	  '</div>';
	  }
	       if(flag==1){
	         questionItem='<div class="panel panel-default">'+
	    '<div class="panel-heading " role="tab" id="'+rid+'">'+
	      '<h4 class="panel-title warning">'+
	       ' <a data-toggle="collapse" data-parent="#accordion" href="#collapse'+rid+'" aria-expanded="true" aria-controls="collapse'+rid+'">'+
	           '<strong> '+title+'</strong>'+
	        '</a>'+
	      '</h4>'+
	    '</div>'+
	    '<div id="collapse'+rid+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'+rid+'">'+
	      '<div class="panel-body">'+
	        '<label class="pull-right time"><span class="glyphicon glyphicon-time"></span>&nbsp;'+rdate+'</lable>'+
	       '<div class="sysWarning">'+
	         ' <div class="media">'+
	         '<div class="media-left media-middle">'+
	         '<img class="media-object img-rounded" src="./images/admin.png" alt="..." width="50" height="50">'+
	         '</div>'+
	        '<div class="media-body">'+
	        '<p>'+responser+'</p>'+
	        '<p>'+answer+'</p>'+
	        '</div>'+
	       '</div>'+
	       '</div>'+
	      '</div>'+
	    '</div>'+
	  '</div>';
	       
	       }else if(flag=="2"){
			    questionItem='<div class="panel panel-default">'+
			    '<div class="panel-heading" role="tab" id="'+rid+'">'+
			      '<h4 class="panel-title">'+
			       ' <a data-toggle="collapse" data-parent="#accordion" href="#collapse'+rid+'" aria-expanded="true" aria-controls="collapse'+rid+'">'+
			           '<strong> '+title+'</strong>'+
			        '</a>'+
			      '</h4>'+
			    '</div>'+
			    '<div id="collapse'+rid+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'+rid+'">'+
			      '<div class="panel-body">'+
			        '<div class="media">'+
			         '<div class="media-left media-middle">'+
			         '<img class="media-object img-circle" src="./images/head/head1.gif" alt="..." width="50" height="50">'+
			         '</div>'+
			        '<div class="media-body">'+
			        '<p class="pull-right time"><span class="glyphicon glyphicon-time"></span>&nbsp;'+rdate+'</p>'+
			        '<br>'+
			        '<p>Q:'+question+'</p>'+
			        '</div>'+
			       '</div>'+
			      '</div>'+
			    '</div>'+
			  '</div>';
						    
						    
						    }
	        
				    }
				    
	         var $questionItem=$(questionItem);
	         $("#accordion").append($questionItem);  
				 }
				} 
				  
			  },
			  error:function(){
				  alert("查询失败！");
			  }
			});
			}
	     
	     
	     //提交反馈问题
	     function submitQ(){
	    	 var u_id=window.localStorage.getItem("uid");
	       var u_title=$("#newTitle").val();
	       var u_question=$("#newContent").val();
	       var u_date=new Date();
	       var isOk=true;
	       if(u_title==null||u_title==""||u_question==null||u_question==""){
	         isOk=false;
	      $("#qwarning_msg").html("警告！不允许有空值");
		  $("#qwarning").attr("class","alert alert-danger");
	       }
	       if(u_id==null){
	       alert("登录超时，请重新登录...");
	       isOk=false;
	       }
	       if(isOk==true){
	       $("#qwarning_msg").html("");
	       $.ajax({
			  url:"http://localhost:8080/MonitorPortWeb/question/insertq.do",
			  type:"post",
			  data:{"u_id":u_id,"u_title":u_title,"u_question":u_question,"r_date":u_date},
			  dataType:"json",
			  success:function(result){
				if(result.state==0){
		        var msg=result.msg;
		  $("#qwarning").attr("class","alert alert-success");
		  $("#qwarning_msg").html("<span class='glyphicon glyphicon-ok'></span>&nbsp;"+msg+"");
		         $("#subq").attr("disabled",true);
				} 
				  
			  },
			  error:function(){
				  alert("查询失败！");
			  }
			});
			}
	     }
	     
	     //关闭事件
	     function closeQModal(){
	        $("#qwarning").attr("class","alert alert-danger hide");
	        $("#newTitle").val("");
	        $("#newContent").val("");
	        //showQuestionList();
	     };
	     //查询公告数量
	     //查找信息数目并生成分页
	/*function createPagesCountForNotice(){
		var u_id=window.localStorage.getItem("uid");
	 //查找信息总数
	  $.ajax({
		        url:"http://localhost:8080/MonitorPortWeb/notice/getcount.do",
		        type:"post",
		        data:{"u_flag":1},
		        dataType:"json",
		        success:function(result){
		        	if(result.state==0){
		        	  var totalNum=result.data;
		        	  createPage(4,5,totalNum);
		        	}
		        
		        }
		      });
	 }
	 */
	

	function createInfoPage(pageSize, buttons, total) {
	        $("#infoPage").jBootstrapPage({
	            pageSize : pageSize,
	            total : total,
	            maxPageButton:buttons,
	            onPageClicked: function(obj, pageIndex) {
	             //点击页数执行操作
	             showQuestionList(pageIndex+1);
	            }
	        });
	    }
	  //查询公告数量
	     //查找信息数目并生成分页
	function createPagesCountForInfo(){
		var u_id=window.localStorage.getItem("uid");
	 //查找信息总数
	  $.ajax({
		        url:"http://localhost:8080/MonitorPortWeb/question/getcount.do",
		        type:"post",
		       data:{"u_id":u_id},
		        dataType:"json",
		        success:function(result){
		        	if(result.state==0){
		        	  var totalNum=result.data;
		        	  createInfoPage(6,5,totalNum);
		        	}
		        
		        }
		      });
	 }
	 