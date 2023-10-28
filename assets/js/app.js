$(document).ready(function(){  

    $(".hamburger-menu").click(function(){
      $(this).closest('body').toggleClass('no-scroll');
      $(this).closest('.header-inner').find(".menu-panel").toggleClass('active');    
    });

    $(".ti-close").click(function(){
      $(this).closest('body').toggleClass('no-scroll');
      $(this).closest('.header-inner').find(".menu-panel").toggleClass('active');    
    });


    let preserve = document.querySelector('.banner-area');

    preserve.onmousemove = function(e) {
      let x = -(e.pageX - preserve.offsetLeft) * 0.05;
      let y = -(e.pageY - preserve.offsetTop) * 0.05;
      
      preserve.style.setProperty('--x', x+'px');
      preserve.style.setProperty('--y', y+'px');
    }

    // Banner section
    
    // var sync1 = $("#sync1");
    // var sync2 = $("#sync2");
    // var slidesPerPage = 5;
    // var syncedSecondary = true;

    
    // if ($(document).width() < 767) {
    //     var slidesPerPage = 1;
    // } else if  ($(document).width() <= 1024) {
    //     var slidesPerPage = 2;
    // }

    // sync1.owlCarousel({
    //     items: 1,
    //     slideSpeed: 2000,
    //     nav: true,
    //     autoplay: true, 
    //     dots: true,
    //     loop: true,
    //     responsiveRefreshRate: 200,
    // }).on('changed.owl.carousel', syncPosition);

    // sync2
    // .on('initialized.owl.carousel', function() {
    //     sync2.find(".owl-item").eq(0).addClass("current");
    // })
    // .owlCarousel({
    //     items: slidesPerPage,
    //     dots: false,
    //     nav: false,
    //     margin: 36,
    //     stagePadding: 18,
    //     smartSpeed: 200,
    //     slideSpeed: 500,
    //     slideBy: slidesPerPage,
    //     responsiveRefreshRate: 100
    // }).on('changed.owl.carousel', syncPosition2);

    // function syncPosition(el) {
       
    //     var count = el.item.count - 1;
    //     var current = Math.round(el.item.index - (el.item.count / 2) - .5);

    //     if (current < 0) {
    //         current = count;
    //     }
    //     if (current > count) {
    //         current = 0;
    //     }

        

    //     sync2
    //         .find(".owl-item")
    //         .removeClass("current")
    //         .eq(current)
    //         .addClass("current");
    //     var onscreen = sync2.find('.owl-item.active').length - 1;
    //     var start = sync2.find('.owl-item.active').first().index();
    //     var end = sync2.find('.owl-item.active').last().index();

    //     if (current > end) {
    //         sync2.data('owl.carousel').to(current, 100, true);
    //     }
    //     if (current < start) {
    //         sync2.data('owl.carousel').to(current - onscreen, 100, true);
    //     }
    // }

    // function syncPosition2(el) {
    //     if (syncedSecondary) {
    //         var number = el.item.index;
    //         sync1.data('owl.carousel').to(number, 100, true);
    //     }
    // }

    // sync2.on("click", ".owl-item", function(e) {
    //     e.preventDefault();
    //     var number = $(this).index();
    //     sync1.data('owl.carousel').to(number, 300, true);
    // });


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
        asNavFor: '.hero-carousel-slider',
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
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
        centerMode: true,
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
        speed: 300,
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


