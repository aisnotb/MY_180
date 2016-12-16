$(document).ready(function(){
	// $(".button").on("click", function(){
	// 	// alert("hellow");

	// 	var choices =

	// 	var computerChoice = choices[Math.floor((Math.random()*3))];


	// 	//add evenet Listener to the butttons

	// });

	var userChoice ;

	$('button').on("click", go);

	function go(){
		console.log(this);
		userChoice = this.id;
	}

	var choices =  ["paper", "hammer", "scissors"];

	var computerChoice = choices[Math.floor(Math.random()*3)];


	function displayResult(){
		if (computerChoice == "paper" && userChoice == "siccsor") {
			alert("you lost");
		}else if(computerChoice=='')

	}

	$("#rock").on("click", function(){
		countDown();
		function countDown(){
			var i= 3;
			count();
			function count(){
				$('#showResult').text(i);
				if(i==0){
					displayResult();
				}else{
					i-=1;
					//wait for 500ms
					setTimeout(count,500);
					console.log("executed once");
				}
			}
		}
	});
});