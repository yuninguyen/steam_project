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

    for (let i = 0; i < 6; i++) {
      if (i + 1 == indexSection) {
        $(`#dot-section-${i + 1}`).addClass('active');
      } else {
        $(`#dot-section-${i + 1}`).removeClass('active');
      }
    }

    if ($(this).scrollTop() > 30) {
      $("#goToTop").show();
    } else {
      $("#goToTop").hide();
    }

  });

  let slider = $('.slider-parent')[0];

  hideSlideMenu = () => {
    slider.classList.remove("active");
    $('.overlay').hide()
    setTimeout(() => {
      $('.slider-container').width(0);
    }, 200);
  };

  $('.navbar-toggler').on('click', function (e) {
    if (slider.classList.contains('active')) {
      hideSlideMenu()
    } else {
      slider.classList.add("active");
      $('.overlay').show()
      $('.slider-container').width("100%");
    }
  });

  $('.overlay').on('click', function (e) {
    hideSlideMenu();
  });

  $("#goToTop").on('click', function (e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  $(".dot-section").on('click', function(e) {
    let idx = $(this).data('idx')
    indexSection = idx;
    $('html, body').animate({
      scrollTop: $(`#section-${indexSection}`).offset().top - 165
    }, 500);
  })
});