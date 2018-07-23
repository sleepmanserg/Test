$(document).ready(function(){

  $('.nav-toggle').click(function() {
    $('.responsive-nav').toggleClass('unfold');
  });

  $('.icon').click(function() {
    $('.icon').toggleClass('active');
  });

  window.sr = ScrollReveal();
  sr.reveal('#header img.ipad-top',{
    duration: 500,
    origin: 'right',
    distance: '200px'
  });

  sr.reveal('#header .header-text',{
    duration: 500,
    origin: 'left',
    distance: '200px'
  });
  sr.reveal('#header .header-button',{
    duration: 500,
    origin: 'left',
    distance: '200px'
  });
  sr.reveal('.s-features .reload',{
    delay: 200,
    duration: 500,
    origin: 'bottom',
    distance: '200px'
  });
  sr.reveal('.s-features .inbox',{
    delay: 400,
    duration: 500,
    origin: 'bottom',
    distance: '200px'
  });
  sr.reveal('.s-features .notifications',{
    delay: 600,
    duration: 500,
    origin: 'bottom',
    distance: '200px'
  });

  // sr.reveal('.s-highlights .highlight-ipad',{
  //   delay: 600,
  //   duration: 500,
  //   origin: 'right',
  //   distance: '200px'
  // });
  // sr.reveal('.s-highlights .highlight',{
  //   delay: 600,
  //   duration: 500,
  //   origin: 'left',
  //   distance: '200px'
  // });
  //
  //
  // sr.reveal('.s-second-highlights .highlights-image-ipad',{
  //   delay: 300,
  //   duration: 500,
  //   origin: 'left',
  //   distance: '200px'
  // });
  // sr.reveal('.s-second-highlights .second-highlights-decr',{
  //   delay: 300,
  //   duration: 500,
  //   origin: 'right',
  //   distance: '200px'
  // });

  sr.reveal('.s-pricing .price-descr',{
    delay: 400,
    duration: 500,
    origin: 'left',
    distance: '200px'
  });
  sr.reveal('.s-pricing .price-box',{
    delay: 300,
    duration: 400,
    origin: 'right',
    distance: '200px'
  });
  sr.reveal('.s-pricing .price-box-free',{
    delay: 500,
    duration: 400,
    origin: 'right',
    distance: '200px'
  });




  $(".brands").owlCarousel({
    loop: true,
    smartSpeed: 700,
    dots: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  });
});
