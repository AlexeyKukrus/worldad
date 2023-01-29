$(document).ready(function(){
 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup__blog').fadeIn();
    } else {
      $('.scrollup__blog').fadeOut();
    }
  });
   
  $('.scrollup__blog').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});


