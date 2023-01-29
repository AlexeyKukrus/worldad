$(document).ready(function(){
 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup__info').fadeIn();
    } else {
      $('.scrollup__info').fadeOut();
    }
  });
   
  $('.scrollup__info').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});