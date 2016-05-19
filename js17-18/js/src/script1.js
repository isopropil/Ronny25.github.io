$( function() {
// создаем элементы
  $( 'body' ).append( "<div class = 'wrapper'>" );
  $( '.wrapper' ).append( "<div class = 'container'>" );
  $( '.container' ).append( "<ul class = 'tabs-menu'>" );
  $( '.container' ).append( "<div class = 'tabs'>" );

  for ( i = 0; i < 3; ++i ) {
    $( 'ul' ).append( "<li><a href = '#/'></a></li>" );
    $( 'ul li' ).addClass( function( index ) {
      if ( index == 0 ) {
        return " current";
      }

    });

    var aLinks = $( 'ul li a' ).text( function( index ) {
      return "Вкладка " + ( index + 1 );
    })
    .attr( 'href', function( index ) {
      var linkText;
      if ( index == 0 ) {
       linkText = '#tab-1';
       return linkText;
     }
     if ( index == 1 ) {
       linkText = '#tab-2';
       return linkText;
     }
     if ( index == 2 ) {
       linkText = '#tab-3';
       return linkText;
     }
    });


    $( '.tabs' ).append( "<div class = 'tab-content'>" );
    $( '.tab-content' ).attr( 'id', function( index ) {
      var divId;
      if ( index == 0 ) {
       divId = 'tab-1';
       return divId;
     }
     if ( index == 1 ) {
       divId = 'tab-2';
       return divId;
     }
     if ( index == 2 ) {
       divId = 'tab-3';
       return divId;
     }
    });

  }

});
