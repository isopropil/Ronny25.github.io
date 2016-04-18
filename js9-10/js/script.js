$(function() {
  // jcarousel sript
  $('.jcarousel').jcarousel();

  $('.jcarousel-control-prev')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

    $('.jcarousel-control-next')
      .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');

      })
      .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

  // horyzontal menu script
  $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(500);
        },
        function(){
            $(this).children('.sub-menu').slideUp(500);
        }
    );

  // custom select script
  $("#select-comics").selectbox();

});
