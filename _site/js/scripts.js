(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='https://www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-37336267-4','auto');ga('send','pageview');

$(document).ready(function(){
	$('.mobile').click(function(){
		$(this).next('.menu__list').toggleClass('active')
	});
});


$(document).on("scroll",function(){
  if($(document).scrollTop()>100){
      $(".top-bar").removeClass("large").addClass("small");
  } else{
      $(".top-bar").removeClass("small").addClass("large");
  }
});