$(document).ready(function(){
	$("button").on('click', function(){
		showDice();
		pressBtn();
	});

	function reset(){
		$(".dot").hide();
	}

	function generateRandom(){
		var rdm= [];
		var rdm1 = Math.floor(Math.random()*6+1);
		var rdm2 = Math.floor(Math.random()*6+1);
		rdm.push(rdm1);
		rdm.push(rdm2);
		return rdm;
	}

	function pressBtn(){
		$("button").on("mousedown", function(){
			$(this).removeClass("btn_up");
			$(this).addClass("btn_down");
		});

		$("button").on("mouseup", function(){
			$(this).removeClass("btn_down");
			$(this).addClass("btn_up");
		});
	}

	function showDice(){
		reset();
		var selecte = generateRandom();
		var dice1 = '#dot-' + selecte[0];
		var dice2 = "#dot-" + selecte[1];
		console.log(selecte[0]);
		console.log(selecte[1]);									
		if (selecte[0] == 1) {
			$("#dot-5").show();
		}
		if(selecte[1] == 1){
			$("#dot-15").show();
		}


		if (selecte[0]==2) {
			$("#dot-2").show();
			$("#dot-8").show();
		}
		if (selecte[1]==2) {
			$("#dot-12").show();
			$("#dot-18").show();
		}


		if (selecte[0]==3) {
			for (var i = 3; i <=7; i=i+2) {
				var dots = "#dot-" + i;
				$(dots).show();
			}
		}

		if (selecte[1]==3) {
			for (var i = 13; i<=17; i=i+2) {
				var dots = "#dot-" + i;
				$(dots).show();
			}
		}

		if(selecte[0]==4){
			for(var i = 1; i<=9; i+=2){
				if(i==5){

				}else{
					var dots = "#dot-" + i;
					console.log("this number is " + i);
					$(dots).show();
				}
			}
		}
		if(selecte[1] == 4){
			for(var i = 11; i<=19; i+=2){
				if(i==15){

				}else{
					var dots = "#dot-" + i;
					console.log("this number is " + i);
					$(dots).show();
				}
			}
		}

		if(selecte[0] == 5){
			for(var i = 1; i <=9; i+=2){
				var dots = "#dot-" + i;
				$(dots).show();
			}
		}
		if(selecte[1] == 5){
			for(var i = 11; i <=19; i+=2){
				var dots = "#dot-" + i;
				$(dots).show();
			}
		}

		if(selecte[0] == 6){
			for (var i = 1; i <= 6; i++) {
				var dots = "#dot-"+i;
				$(dots).show();
			}
		}

		if(selecte[1] == 6){
			for (var i = 11; i <= 16; i++) {
				var dots = "#dot-"+i;
				$(dots).show();
			}
		}

	}
});