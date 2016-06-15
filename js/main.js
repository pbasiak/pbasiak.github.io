$(document).ready(function() {
	/* Skills */

	$('.skills-item .skill-wrapper').each(function(){
		var skillWidth = $(this).children('span').attr('data-width');

		$(this).children('span').css('width', skillWidth);

		$(this).find('.tooltip').text(skillWidth);

		$(this).find('.tooltip').css('left', skillWidth);
	});
});