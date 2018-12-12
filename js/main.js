$(document).ready(function () {
  let indexSection = 1;
  let s1Top = $('#section-1').offset().top;
  let s2Top = $('#section-2').offset().top;
  let s3Top = $('#section-3').offset().top;
  let s4Top = $('#section-4').offset().top;
  let s5Top = $('#section-5').offset().top;
  let s6Top = $('#section-6').offset().top;

  $('a[href*=advertisement]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });

  $('.scroll-down-btn').on('click', function (e) {
    indexSection++;
    $('html, body').animate({
      scrollTop: $(`#section-${indexSection}`).offset().top - 165
    }, 500);
    if (indexSection === 6) {
      $('.scroll-down-btn').hide();
    }
  });

  $(window).scroll(function (e) {
    let st = $(this).scrollTop() + 165;
    if (st < s1Top) {
      indexSection = 1;
      $('.scroll-down-btn').show();
    } else if (st >= s1Top && st < s2Top) {
      indexSection = 1;
      $('.scroll-down-btn').show();
    } else if (st >= s2Top && st < s3Top) {
      indexSection = 2;
      $('.scroll-down-btn').show();
    } else if (st >= s3Top && st < s4Top) {
      indexSection = 3;
      $('.scroll-down-btn').show();
    } else if (st >= s4Top && st < s5Top) {
      indexSection = 4;
      $('.scroll-down-btn').show();
    } else if (st >= s5Top && st < s6Top) {
      indexSection = 5;
      $('.scroll-down-btn').show();
    } else {
      indexSection = 6;
      $('.scroll-down-btn').hide();
    }

  });

});