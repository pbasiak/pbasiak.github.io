$(document).ready(function(){
	var expYears = new CountUp("expYears", 0, 4);
	var expProjects = new CountUp("expProjects", 0, 60);
	var expCode = new CountUp("expCode", 0, 120);



	$(window).scroll(function(){

	  var top_expCounter = $("#expCounter").offset().top;
	  var height_expCounter = $("#expCounter").outerHeight();
	  var wH = $(window).height();

	  if ($(window).scrollTop() > (top_expCounter + height_expCounter - wH + 20)) {
	    expYears.start();
	    expProjects.start();
	    expCode.start();
	  }
	});
});