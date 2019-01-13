'use strict';
(function ($) {
  $(document).ready(function() {
      $(window).on('load', function () {
          $('#content').css("display", "block");
          $('#preloader').delay(1000).fadeOut('slow');
      });
      window.onscroll = function() {
          makeHeader();
          $('section').fadeIn(5000);
      };
      var header = document.querySelector("header");
      var sticky = header.offsetTop;
      function makeHeader() {
          if (window.pageYOffset > sticky) {
              header.classList.add('sticky');
          } else {
              header.classList.remove('sticky');
          }
      };
      $('.navigation__item').click(function (e) {
          e.preventDefault();
          $('.navigation__item').removeClass('navigation__item--active');
          this.classList.add('navigation__item--active');
          var target = $(this.hash);
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 1000)
         });

        $('.carousel').slick({
            speed: 1000,
            slide: 'div',
            prevArrow: '.carousel__prev',
            nextArrow: '.carousel__next',
            dots: true,
            dotsClass: 'slick-dots carousel__dots',
            customPaging: function(slider,i) {
                var slideNumber = (i + 1);
                return '<a class="carousel__number">' + 0 + slideNumber + '</a>';
            }
        });
       /* $('.carousel__next').click(function next() {
            $('.carousel').slick('slickNext');
            $('.carousel__number').removeClass('carousel__number--active');
            $('.carousel__number').nextSibling.add('carousel__number--active');
        });*/

       $('.voyager__carousel').slick({
           centerMode: true,
           slide: 'div',
           prevArrow: '.voyager__prev',
           nextArrow: '.voyager__next',
           slidesToShow: 4,
           slidesToScroll: 1,
           initialSlide: 2,
           /*responsive: [
               {
                   breakpoint: 768,
                   settings: {
                       slidesToShow: 1
                   }
               }
               ]*/
       });
      // $('.voyager__arrow').on('click', function(event, slick, currentSlide, nextSlide){
      //     currentSlide.animate({
      //         height: '200px',
      //         paddingTop: '100px'
      //     },500)
      //     nextSlide.animate({
      //         height: '300px',
      //         paddingTop: '0px'
      //     },500)
      // });
    /*  $('.voyager__arrow').click(function () {
          $('.slick-current').animate({
              height: '300px',
              paddingTop: '0px'
          },1500)
      });*/
      $('.drifter__carousel').slick({
          centerMode: true,
          slide: 'div',
          prevArrow: '.drifter__prev',
          nextArrow: '.drifter__next',
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,
          dots: true,
          dotsClass: 'slick-dots drifter__dots',
          customPaging: function(slider,i) {
              var slideNumber = (i + 1);
              return '<a class="drifter__number">' + 0 + slideNumber + '</a>';
          }
      });

      $('.voyager__info--link, .drifter__info--link').mouseover(function () {
         $(this).animate({
             fontSize: '90px',
         },500)
      });
      $('.voyager__info--link, .drifter__info--link').mouseout(function () {
          $(this).animate({
              fontSize: '65px',
          },500)
      });
      var freqSecs = 1.2;
      setInterval (blink, freqSecs*1000 );

      function blink() {
          var inout = (freqSecs*1000)/0.5;
          $('.collection__link').fadeIn(inout).fadeOut(inout);
      }


      $('.collection__gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0,1]
          },
          image: {
              tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
              titleSrc: function() {
                  return 'Best BAGS' +'<br>' + '<span>by TANNER GOODS' + '<br>' + 'portland ORE</span>';
              }
          }
      });

      $('.footer__link').click(function (e) {
          e.preventDefault();
          $('.footer__link').removeClass('footer__link--active');
          this.classList.add('footer__link--active');
      });
    });
})(jQuery);