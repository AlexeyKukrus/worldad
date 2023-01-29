$(document).ready(function(){
 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup__partners').fadeIn();
    } else {
      $('.scrollup__partners').fadeOut();
    }
  });
   
  $('.scrollup__partners').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

