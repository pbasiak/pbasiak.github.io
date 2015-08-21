$(document).ready(function() {
	console.log('Main.js załadowany.');
	if ( (window).width < 1024 ) {
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
	}

	/* Skills */

	console.log('Jestem');

	$('.skills-item .skill-wrapper').each(function(){
		var skillWidth = $(this).children('span').attr('data-width');

		$(this).children('span').css('width', skillWidth);

		$(this).find('.tooltip').text(skillWidth);

		$(this).find('.tooltip').css('left', skillWidth);
	});
});


$(window).load(function(){
	$('.portfolio--list').masonry({
	  // options
	  itemSelector: '.portfolio--article',
	  columnWidth: '.portfolio--article'
	});
});