function indexFns(){
	checkLogin();
	//点击二级按钮触发的事件
	$(".nav-second-level a").click(function() {
		$("#main-menu a").removeClass("active-menu");
		$(this).addClass("active-menu");
	});
	//点击主页面触发的事件
	$("#mainmenu").click(function() {
		$("#main-menu a").removeClass("active-menu");
		$(this).addClass("active-menu");
	});
	
}
function checkLogin(){
  var aid=window.localStorage.getItem("aid");
  if(aid==null){
	  window.location.href="login.html";
  }
}
function aLogOut(){
	 window.localStorage.removeItem("aid");
		window.location.href="login.html";
}
		