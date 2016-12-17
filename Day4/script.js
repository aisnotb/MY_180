$(document).ready(function(){
	start();
	function start(){
		var time = new Date();
		var hour = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		$("#time").text(hour + ":"+ min + ":" + sec);
	}
	setTimeout(start, 500);

});