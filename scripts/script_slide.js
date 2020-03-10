$(document).ready(function(){
  var backButton = '<span class="slide-arrow arrow-prev"></span>';
  var nextButton = '<span class="slide-arrow arrow-next"></span>'
$('.single-slide').slick({
 infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: backButton,
  nextArrow: nextButton,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1
         }      
    },
     {
    breakpoint: 768,
    settings: {
    dots: true,
    arrows: false,
     slidesToShow: 1,
     slidesToScroll: 1
          }
    }]
  })
});