(function($) {

  $.fn.fancybox = function() {

    var $link = this;
    var $wrapper = $('.wrapper');

    function openOverlay(e) {
      var href = $(this).attr('href');

      e.preventDefault();

      $wrapper.append(
        $('<div/>')
          .addClass("fancybox-overlay")
          .append('<div class = "fancybox-image"></div>')
      );
      $('.fancybox-image').append(
        $('<img>')
          .attr('src', href),
        $('</p>')
          .addClass('closeButton')
          .text('x')
      );

      $(document).one("click", ".closeButton", function() {
        $('.fancybox-overlay').remove();
      });

    }

    $link.on('click', openOverlay);

    return this;
  }

})(jQuery);
