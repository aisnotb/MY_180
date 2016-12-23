$(document).ready(function() {
    var advices = [
	    "That's terrible! You should knock that off!",
	    "Seriously? Why don't you grow the hell up?!",
	    "Aren't you a little old for that crap?",
	    "You are bad and you should feel bad!",
	    "Gross. You are gross.",
	    "Are you going to suck all your life?",
	    "What? Who does that?!",
	    "I thought you were better than that.",
	    "My disapproval is overwhelming.",
	    " ಠ__ಠ 你的脑袋被门夹了？ ",
	    "Are you freaking kidding me?",
	    "NO! Bad!",
	    "And when do you plan on becoming an adult?",
	    "That is totally unacceptable.",
	    "You should be utterly ashamed.",
	    "Ugh! That's horrible!",
	    "A kitten dies everytime you do that.",
	    "I can't believe you are that disgusting."
	];

	// $(input[type="text"]).on()

	$("#inputbox").on("submit", function(event) {
	    console.log("dfsdfdsfsd");
	    var modifiedText = $("input[type=text]").val().replace(/^\s+|\s+$/g, '');
	    alert(modifiedText);

	    if(modifiedText == ''){
	    	$("#title").text(" You didnt type any thing!");
	    }else{
	    	$("#title").text("What the hell?");
	    	var random = Math.floor(Math.random()*18);
	    	$("#title").append(advices[random]);
		}
	    event.preventDefault();
	});

	

});
