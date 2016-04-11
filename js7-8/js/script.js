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
// содержимое вкладок
    $( '#tab-1' ).text( 'jQuery — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. ' +
    'Библиотека jQuery помогает легко получать доступ к любому элементу DOM, ' +
    'обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. ' +
    'Также библиотека jQuery предоставляет удобный API для работы с AJAX. ' +
    'Сейчас разработка jQuery ведётся командой jQuery во главе с Джоном Резигом.' );

    // создаем input и привязываем к нему label
    for ( i = 0; i < 3; ++i ) {
      $( '#tab-2' ).append( '<div>' );
      $( '#tab-2 div' ).addClass( function( index ) {
        return "form" + ( index + 1 );
      })
    };

    var $labelFirstName = $( "<label>" ).text( 'Имя' );
    var $inputFirstName = $( '<input type = "text">' ).attr( { id: 'fName', name: 'data' } );
    var $tip1 = $( "<p class = 'tipText1'>" ).text( 'Пожалуйста, напишите Ваше имя' );

    var $labelSecondName = $( "<label>" ).text( 'Фамилия' );
    var $inputSecondName = $( '<input type = "text">' ).attr( { id: 'SName', name: 'data' } );
    var $tip2 = $( "<p class = 'tipText2'>" ).text( 'Пожалуйста, напишите Вашу фамилию' );

    var $labelAddressField = $( "<label>" ).text( 'Адрес' );
    var $inputAddressField = $( '<input type = "text">' ).attr( { id: 'address', name: 'data' } );
    var $tip3 = $( "<p class = 'tipText3'>" ).text( 'Пожалуйста, напишите Ваш адрес' );


    $inputFirstName.appendTo( $labelFirstName );
    $inputSecondName.appendTo( $labelSecondName );
    $inputAddressField.appendTo( $labelAddressField );

    //вставляем label во вторую вкладку
    $( '.form1' ).append( $labelFirstName );
    $( '.form1' ).append( $tip1 );

    $( '.form2' ).append( $labelSecondName ).before( '<br>' );
    $( '.form2' ).append( $tip2 );

    $( '.form3' ).append( $labelAddressField ).before( '<br>' );
    $( '.form3' ).append( $tip3 );
    //

    $( '#tab-3' ).text( 'Библиотека jQuery содержит функциональность, полезную для максимально широкого круга задач. ' +
    'Тем не менее, разработчиками библиотеки не ставилась задача совмещения в jQuery функций, ' +
    'которые подошли бы всюду, поскольку это привело бы к большому коду, бо́льшая часть которого не востребована. ' +
    'Поэтому была реализована архитектура компактного универсального ядра библиотеки и плагинов. ' +
    'Это позволяет собрать для ресурса именно ту JavaScript-функциональность, которая на нём была бы востребована.' );


// переключение вкладок
  $( ".tabs-menu a" ).click( function( event ) {
        event.preventDefault();
        $( this ).parent().addClass( "current" );
        $( this ).parent().siblings().removeClass( "current" );
        var $tab = $( this ).attr( "href" );
        $( ".tab-content" ).not( $tab ).css( "display", "none" );
        $( $tab ).fadeIn();
  });

// реализация подсказок
  $( ".form1 input" ).hover( function() {
    $( '.tipText1' ).stop( true, true )
                          .animate( { opacity: "show", left: "450" }, "slow" );
  }, function() {
    $( '.tipText1' ).stop( true, true )
                          .animate( { opacity: "hide", left: "30" }, "fast" );
  });

  $( ".form2 input" ).hover( function() {
    $( '.tipText2' ).stop( true, true )
                          .animate( { opacity: "show", left: "450" }, "slow" );
  }, function() {
    $( '.tipText2' ).stop( true, true )
                          .animate( { opacity: "hide", left: "30" }, "fast" );
  });

  $( ".form3 input" ).hover( function() {
    $( '.tipText3' ).stop( true, true )
                          .animate( { opacity: "show", left: "450" }, "slow" );
  }, function() {
    $( '.tipText3' ).stop( true, true )
                          .animate( { opacity: "hide", left: "30" }, "fast" );
  });

});
