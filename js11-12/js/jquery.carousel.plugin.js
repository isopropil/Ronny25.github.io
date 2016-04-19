(function($){

  $.fn.carousel = function(){

    var $leftTurn = $('.slider-arrow-left');
    var $rightTurn = $('.slider-arrow-right');
    var $elementsList = $('.slider-list');

    var $pixelsOffset = 325;
    var $currentLeftValue = 0;
    var $elementsCount = $elementsList.find('li').length;
    var $minimumOffset = - (($elementsCount - 3) * $pixelsOffset);
    var $maximumOffset = 0;

    $('.left, .slider-arrow-left').hover(function(){
      $leftTurn.addClass('show');
    }, function(){
      $leftTurn.removeClass('show');
    });

    $('.right, .slider-arrow-right').hover(function(){
      $rightTurn.addClass('show');
    }, function(){
      $rightTurn.removeClass('show');
    });

    $leftTurn.click(function(e) {
      e.preventDefault();

      if ($currentLeftValue != $maximumOffset) {
        $currentLeftValue += 325;
        $elementsList.animate({ left : $currentLeftValue + "px"}, 500);
      }

    });

    $rightTurn.click(function(e) {
      e.preventDefault();

      if ($currentLeftValue != $minimumOffset) {
        $currentLeftValue -= 325;
        $elementsList.animate({ left : $currentLeftValue + "px"}, 500);
      }

    });





    return this;
  }

})(jQuery);
