$(document).ready(function(){
    function animateCssLeft(element) {
      var top_expCounter = $(element).offset().top;
      var height_expCounter = $(element).outerHeight();
      var wH = $(window).height();

      $(element).addClass('not-active');

      if ($(window).scrollTop() > (top_expCounter + height_expCounter - wH - 70)) {
        $(element).addClass('animated fadeInLeft');
        $(element).removeClass('not-active');
      }
    }

    function animateCssRight(element) {
      var top_expCounter = $(element).offset().top;
      var height_expCounter = $(element).outerHeight();
      var wH = $(window).height();

      $(element).addClass('not-active');

      if ($(window).scrollTop() > (top_expCounter + height_expCounter - wH - 70)) {
        $(element).addClass('animated fadeInRight');
        $(element).removeClass('not-active');
      }
    }

    function animateCssCustom(element, anime) {
      var top_expCounter = $(element).offset().top;
      var height_expCounter = $(element).outerHeight();
      var wH = $(window).height();

      if ($(window).scrollTop() > (top_expCounter + height_expCounter - wH - 70)) {
        $(element).addClass('animated');
        $(element).addClass(anime);
      }
    }

    $('.section-transparent .section-description').each(function(){
      animateCssLeft(this);
    });

    $('.section-blue .section-description').each(function(){
      animateCssRight(this);
    });

    $('.section-transparent .section-image').each(function(){
      animateCssRight(this);
    });

    $('.section-blue .section-image').each(function(){
      animateCssLeft(this);
    });

    $(window).scroll(function(){
      $('.section-transparent .section-description').each(function(){
        animateCssLeft(this);
      });

      $('.section-blue .section-description').each(function(){
        animateCssRight(this);
      });

      $('.section-transparent .section-image').each(function(){
        animateCssRight(this);
      });

      $('.section-blue .section-image').each(function(){
        animateCssLeft(this);
      });

      animateCssCustom('.button--antiman', 'jello');

    });
  });
