$(document).ready(function(){

	var userChoice, computerChoice;
	var choices =  ["paper", "rock", "scissors"];

	$('.button').on("click", go);

	function go(){

		console.log(this);
		userChoice = this.id;
		$(".button").off("click");  //
		console.log("user choice is "+ userChoice);
		// $("#result").hide();	
		makeChoice();
		countDown();
		displayResult();
	}

	function makeChoice(){
		computerChoice = choices[Math.floor(Math.random()*3)];
		console.log("computer choice is "+ computerChoice);
	}

	function countDown(){
		var i= 3;
		$("#left-fist-png").addClass("animateImages");
		$("#right-fist-png").addClass("animateImages");
		count();
		function count(){
			if(i==3){
				$("showResult").text("shoot")
			}
			$('#showResult').text(i);
			if(i==0){
				displayResult();
			}else{
				i-=1;
				//wait for 500ms
				setTimeout(count,1000);
			}
		}
	}

	function displayResult(){
		$("#left-fist-png").removeClass("animateImages");
		$("#left-container").hide("slow", function(){
			console.log("left container hided");
		});

		$("#right-container").hide("slow", function(){
			console.log("right container hided");
		});
		$("#left-"+computerChoice+"-png").show("fast", function(){
			console.log("computer choice showed");
		});
		$("#right-"+ userChoice+"-png").show();

		setTimeout(function(){
			if(userChoice== computerChoice){
				$("#showResult").text("Tie");
			}else{
				if((userChoice=="rock" && computerChoice=='scissors') || (userChoice=='paper' && computerChoice=='rock') ||(userChoice=='scissors' && computerChoice=='paper')){
					$("#showResult").text("you win");
				}else{
					$("#showResult").text("you lose");
				}
			}
			$('.button').on('click', go);
		},5000);
	}
});