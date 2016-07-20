define(
  'Controller',
  [
    'jquery',
    'tmpl'
  ],
  function() {

    return {

      Controller: function(model, view) {
        var self = this,
            id = 1;

        if (typeof model.data === 'undefined') {
          model.findCharacter();
        }

        $('#btnPrev').on('click', prevCharacter);
        $('#btnNext').on('click', nextCharacter);

        function prevCharacter() {
          if ( id > 1 ) {
            id--;
          }
          model.findCharacter(id);

          setTimeout(function run() {
            if (model.check === id) {
              return view.render(model.data);
            }
            setTimeout(run, 50);
          }, 100);

          if ( id === 1 ) {
            $( "#btnPrev" ).prop('disabled', true);
          }
          if ( id === 86 ) {
            $( "#btnNext" ).prop('disabled', false);
          }
        }

        function nextCharacter() {
          if ( id < 88 ) {
            id++;
          }
          model.findCharacter(id);

          setTimeout(function run() {
            if (model.check === id) {
              return view.render(model.data);
            }
            setTimeout(run, 50);
          }, 100);

          if ( id === 2 ) {
            $( "#btnPrev" ).prop('disabled', false);
          }
          if ( id === 87 ) {
            $( "#btnNext" ).prop('disabled', true);
          }
        }
      }

    };
  }
);
