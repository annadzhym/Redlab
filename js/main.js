'use strict';
(function ($) {
  $(document).ready(function() {
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
            dotsClass: 'slick-dots carousel__number'
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
      });
      $('.collection__gallery--item').pan();

      $('.footer__link').click(function (e) {
          e.preventDefault();
          $('.footer__link').removeClass('footer__link--active');
          this.classList.add('footer__link--active');
      });
    });
})(jQuery);