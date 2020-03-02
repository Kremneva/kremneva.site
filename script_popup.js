$(function(){
  const disableScroll = function ()
           {
    $('html, body').on('mousewheel', function(){
      return false;
           });
          }
  const enableScroll = function ()
      {
  $('html, body').off('mousewheel');
  }
$('.header_button, .first_button, .services_button, .header__button__mobile').click(function(){
   $('.popup__container, .popup__feedback').fadeIn(400, disableScroll);
   $('.popup__feedback').animate({
      width: '500px',
      height: '300px'
     }, 400)
    }); 

    function closePopup() {
      $('.popup__container').fadeOut(400, enableScroll);
      $('.popup__feedback').animate({
          width: 0,
          height: 0
      }, 400)
    }
    
    $('.popup__container').click(function (event) {
    
      if (event.target == this) {
          closePopup();
      }
    });
    
    $(".close-btn").click(function () {
      closePopup()
    });

$('.header__mobile').click(function(){
    $('.popup__container1').fadeIn(400, disableScroll); 
    $('.popup__menu').animate({
       width: '200px',
       height: '200px'
      }, 400)
     }); 
     
$('.popup__container1').click(function(event) {
     if(event.target == this) {
      $(this).fadeOut(400, enableScroll);
     $('.popup__menu').animate({
         width: 0,
         height: 0
     }, 400)
    }
  });

  $(function(){
    $("#popup__txt__tel").mask("8(999) 999-9999", {
      completed: function(){ alert("Вы ввели номер: " + this.val()); }
    });
  });

});