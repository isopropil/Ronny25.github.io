$(function(){

  // sliders
  $('.slider1').sss({
    slideShow : true, // Set to false to prevent SSS from automatically animating.
    startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
    transition : 400, // Length (in milliseconds) of the fade transition.
    speed : 3500, // Slideshow speed in milliseconds.
    showNav : true // Set to false to hide navigation arrows.
  });
  $('.slider2').sss({
    slideShow : true, // Set to false to prevent SSS from automatically animating.
    startOn : 1, // Slide to display first. Uses array notation (0 = first slide).
    transition : 400, // Length (in milliseconds) of the fade transition.
    speed : 3500, // Slideshow speed in milliseconds.
    showNav : true // Set to false to hide navigation arrows.
  });
  $('.slider3').sss({
    slideShow : true, // Set to false to prevent SSS from automatically animating.
    startOn : 2, // Slide to display first. Uses array notation (0 = first slide).
    transition : 400, // Length (in milliseconds) of the fade transition.
    speed : 3500, // Slideshow speed in milliseconds.
    showNav : true // Set to false to hide navigation arrows.
  });


  // создание оборачивающего дива для кастомного grid
  var $undertile = $('.undertile');
  $('<div class="grid"></div>').insertBefore($undertile);

  var $grid = $('.grid');
  $grid.append('<div class="grid-sizer"></div>');
  var $search = "";

  // старт поиска по нажатию кнопки или Enter
  $( ".search_partners" ).on('click', searching);
  $( ".tiles__input" ).on('keypress', function(e) {
    if(e.which == 13) {
        searching();
    }
  });

  function searching() {
    $search = $( '.tiles__input' ).val();
    $('.grid-item').remove();
    $('.noResults').remove();

    // получение данных поискового запроса
    var API_KEY = '2574751-d32821dd6594ad25f642f93c2';
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&per_page=7"+"&q="+encodeURIComponent($search);

    $.getJSON(URL, function(data) {

        if (parseInt(data.totalHits) > 0){

            $.each(data.hits, function(i, hit) {

              function parseUrl( url, tags ) {
                  var $img = $('<img>');
                  $img.src = url;
                  var tag = tags.split(",");
                  var $tagText = tag[Math.floor(Math.random() * tag.length)];

                  var $links = $('<a href='+ $img.src +'><img src=' + $img.src + '><p class="tile_header">' + $tagText + '</p></a>');


                  $grid.append(
                    $('<div>')
                      .attr('class', 'grid-item')
                      .append($links)
                  );

                  $links.attr('target', "_blank");
                    $('.grid-item img').attr({
                        class: 'gridImg'
                    });




                  return $img;
              }

              parseUrl(hit.webformatURL, hit.tags);
            });

        } else {
          $('<p class = "noResults">').insertBefore($undertile);
            $('.noResults').text('К сожалению результаты поиска отсутсвуют, попробуйте еще раз...');
        }
    });
  }

  searching();

  // external js: isotope.pkgd.js, imagesloaded.pkgd.js

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });


});
