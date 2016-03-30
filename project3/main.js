


$("div").hover(function(){
	if ($(this).addClass("hover")) {

		$(this).removeClass("hover");

		var choices = ["sunny","warm","rainy", "grey", "bright", "snowy", "foggy" ];
		
		var choice= choices[Math.floor(Math.random()*choices.length)];
		document.write('<font size = \"50px\">The weather for tomorrow is' + "<br>" + choice);


	}

});

