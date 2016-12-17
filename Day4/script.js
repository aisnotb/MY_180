$(document).ready(function(){
	function start(){
		var time = new Date();
		var hour = time.getHours();
		if(hour > 12){
			hour = hour-12;
			hour = format(hour);
		}
		var min = time.getMinutes();
		min=format(min);

		var sec = time.getSeconds();
		sec= format(sec);
		$("#time").text(hour + ":"+ min + ":" + sec);

		var newColor = changeColorByTime(hour, min, sec);
		$("#newColor").text(newColor);
		$("#body").css("background-color", "#"+newColor);
		// changeColorByTime(hour, min, sec);
	}

	function format(tobeFomated){
		if(tobeFomated<10){
			tobeFomated="0"+tobeFomated;
		}
		return tobeFomated;
	}

	setInterval(start, 500);
	function changeColorByTime(hour, min, sec){
		var redRGB = Math.round(255*hour/23).toString(16);
		var greenRGB = Math.round(255* min/59).toString(16);
		var blueRGB = Math.round(255* sec/59).toString(16);

		redRGB = format(redRGB);
		greenRGB = format(greenRGB);
		blueRGB = format(blueRGB);

		// console.log(red + green + blue);
		var newColor = (redRGB+ greenRGB+blueRGB).toUpperCase();
		return newColor;
	}

});