
$("#right").click(function(){
	$(".black_rec1").animate({"left": "+=50px"}, "slow");
  });
  
  $("#left").click(function(){
	$(".black_rec1").animate({"left": "-=50px"}, "slow");
  });



  for (var i = 0; i < 10; i++) {
	var rotation = Math.round((i/10) * 360);

	var template = `
	<div class="square"></div>
	`;

	document.getElementById("rec").insertAdjacentHTML('beforeend', template);	
}

