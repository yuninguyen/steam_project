$(document).ready(function () {
  $('a[href*=advertisement]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });

  $('.scroll-down-btn').on('click', function (e) {
    $('html, body').animate({
      scrollTop: $("#section-2").offset().top - 165
    }, 500);
 });
  
  }); 
  $(document).ready(function () {
  $('a[href*=current-coaches]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });

  $('.scroll-down-btn').on('click', function (e) {
    $('html, body').animate({
      scrollTop: $("#section-3").offset().top - 165
    }, 500);
 });
 });