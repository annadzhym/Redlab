'use strict';
(function ($) {
  $(document).ready(function() {
      $(window).on('load', function () {
          $('#content').css("display", "block");
          $('#preloader').delay(1000).fadeOut('slow');
      });

      window.onscroll = function() {makeHeader()};
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
              titleSrc: function(item) {
                  return 'Best BAGS' + '<small>by TANNER GOODS</small>';
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