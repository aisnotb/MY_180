$(document).ready(function(){
	var message = "";

	var score = getScore();

	function getScore(){
		var scoreSum = 0;
		var numOfBoxes = $('input[type=radio]');
		console.log(numOfBoxes);
		for (var i = 0; i < numOfBoxes.length; i++) {
			scoreSum+=numOfBoxes[i];
			console.log(scoreSum);
		}
		return scoreSum;
	}

	$("#submit").on('click', function(){
		alert("button clicked"); 
		alert(getScore());
	});

});