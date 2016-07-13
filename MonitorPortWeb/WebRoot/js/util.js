//日期时间格式
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
//日期格式
function formatDate(now) { 
	var year=now.getFullYear(); 
	var month=now.getMonth()+1; 
	var date=now.getDate(); 
	var mon=month<10?''+0+month:month;
	var d=date<10?''+0+date:date;
	return year+"-"+mon+"-"+d; 
	}