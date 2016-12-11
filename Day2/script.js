$(document).ready(function(){
	// try to hide the first box

	$('.one').on('click', function(event){
		$(this).hide();
	});

	//slowly disapper the second box
	$('.two').on('click',function(event){
		$(this).hide(4000, function(){
			$(this).remove();
		});
	});

	//lets play aroud the third box and move it back
	$('.three').on('click',function(){
		// console.log('magic happens here');

		var random  = Math.random()*1000;
		$(this).animate({
			"top": "+=" + random+ "px",
			opacity: 0.25
		}, "slow", function(){
			console.log('move the box down completed');
		});

		$(this).animate({
			"top": "-=" + random+ "px",
			opacity: 1
		}, "slow", function(){
			console.log('move it up completed');
		});

	});


	//give the fourth box a rotate animation
	// $('.four').on('click',function(){
	// 	$(this).addClass("rotate");
	// })

});