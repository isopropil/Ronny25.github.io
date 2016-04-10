$(function() {
  $( 'body' ).append( "<div class = 'wrapper'>" );
  $( '.wrapper' ).append( "<div class = 'container'>" );
  $( '.container' ).append( "<ul class = 'tabs-menu'>" );
  $( '.container' ).append( "<div class = 'tabs'>" );


  for ( i = 0; i < 3; ++i ) {
    $( 'ul' ).append( "<li><a href = '#/'></a></li>" );
    $( 'ul li' ).addClass(function( index ) {
      if (index == 0) {
        return " current";
      }
      // return "tab " + ( index + 1);
    });

    var aLinks = $( 'ul li a' ).text(function( index ) {
      return "Tab " + ( index + 1 );
    })
    .attr( 'href', function( index ) {
      var linkText;
      if (index == 0) {
       linkText = '#tab-1';
       return linkText;
     }
     if (index == 1) {
       linkText = '#tab-2';
       return linkText;
     }
     if (index == 2) {
       linkText = '#tab-3';
       return linkText;
     }
    });


    $( '.tabs' ).append( "<div class = 'tab-content'>" );
    $( '.tab-content' ).attr( 'id', function( index ) {
      var divId;
      if (index == 0) {
       divId = 'tab-1';
       return divId;
     }
     if (index == 1) {
       divId = 'tab-2';
       return divId;
     }
     if (index == 2) {
       divId = 'tab-3';
       return divId;
     }
    });

    $( '#tab-1' ).text( 'Lorem 1' );
    $( '#tab-2' ).text( 'Lorem 2' );
    $( '#tab-3' ).text( 'Lorem 3' );

  }

  $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
  });
});
