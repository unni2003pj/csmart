$('body').append('<div class="loader"><img src="assets/images/svg/csmart-logo-footer.svg"/></div>');
$(window).on('load', function(){
  $('body').addClass('no-scroll');
  setTimeout(removeLoader, 2000);
});
function removeLoader(){
  $('body').removeClass('no-scroll');
    $( ".loader" ).fadeOut(500, function() {      
      $( ".loader" ).remove();
  });  
}

$(document).ready(function(){  

    // Mobile Menu

    $(".hamburger-menu").click(function(){
      $(this).closest('body').toggleClass('no-scroll');
      $(this).closest('.header-inner').find(".menu-panel").toggleClass('active');    
    });

    $(".ti-close").click(function(){
      $(this).closest('body').toggleClass('no-scroll');
      $(this).closest('.header-inner').find(".menu-panel").toggleClass('active');    
    });

    // Animation 3D

    let preserve = document.querySelector('.banner-area');

    preserve.onmousemove = function(e) {
      let x = -(e.pageX - preserve.offsetLeft) * 0.05;
      let y = -(e.pageY - preserve.offsetTop) * 0.05;
      
      preserve.style.setProperty('--x', x+'px');
      preserve.style.setProperty('--y', y+'px');
    }

    // Banner section
    
    $('.hero-carousel-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      adaptiveHeight: true,
      infinite: false,
      useTransform: true,
      speed: 400,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });
   
    $('.carousel-card-slider')
      .on('init', function(event, slick) {
        $('.carousel-card-slider .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        speed: 400,
        asNavFor: '.hero-carousel-slider',
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
        }, {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
       }
        }]
      });
   
    $('.hero-carousel-slider').on('afterChange', function(event, slick, currentSlide) {
      $('.carousel-card-slider').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.carousel-card-slider .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.carousel-card-slider .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });
   
    $('.carousel-card-slider').on('click', '.slick-slide', function(event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');   
      $('.hero-carousel-slider').slick('slickGoTo', goToSingleSlide);
    });

    // client slider

    $('.client-section').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        pauseOnHover:true,
        centerMode: false,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
    });
    
    // Vertical slider

    $('.vertical-section').slick({
        autoplay: true,
        dots: false,
        vertical: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        verticalSwiping: true,
        prevArrow: false,
        nextArrow: false,
        centerMode: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
        
    });
    
    // Testimonial slider

    $('.testimonial-section').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow: false,
        nextArrow: false,
        centerPadding:'80px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
    });

    // Sticky

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
        $('.header-block').addClass('sticky');
        } else {
        $('#back-to-top').fadeOut();
        $('.header-block').removeClass('sticky');
        }
    });

    // URL scroll

    $('.menu-listing li a').on('click', function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
        $('.ti-close').closest('body').toggleClass('no-scroll');
        $('.ti-close').closest('.header-inner').find(".menu-panel").toggleClass('active');
        return false;
    });

    AOS.init({
        disable: function() {
            var maxWidth = 800;
            return window.innerWidth < maxWidth;
        }
    });

    var $btns = $('.gallery-filter').click(function() {
        if (this.id == 'all') {
          $('.gallery-grid .each-grid-container').fadeIn(450);
        } else {
          var $el = $('.' + this.id).fadeIn(450);
          $('.gallery-grid .each-grid-container').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    }) 

    // Back to top  
    $('#back-to-top').click(function () {
    $('body,html, .wrapper').animate({
        scrollTop: 0
    }, 400);
    return false;
    });


})


