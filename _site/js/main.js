$(document).ready(function() {
	console.log('Dziala');
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$(".main-page").mousemove(function(e){
	          var pageX = e.pageX - ($(window).width() / 2);
	          var pageY = e.pageY - ($(window).height() / 2);
	          var newvalueX = width * pageX * -1 - 25;
	          var newvalueY = height * pageY * -1 - 50;
	          $('.front-header').css("background-position", newvalueX+"px     "+newvalueY+"px");
	});
});


$(window).load(function(){
	$('.portfolio--list').masonry({
	  // options
	  itemSelector: '.portfolio--article',
	  columnWidth: '.portfolio--article'
	});
});