function Model(link) {
  var self = this,
      character;

  self.findCharacter = function ( id ) {
    if (typeof id === 'undefined') {
      id = 1;
    }
    fetch( link + id )
      .then(function( response ) {
        return response.json();
      })
      // get all the data about the character
      .then(function( peopleData ) {
        character = peopleData;
        return Promise.all( peopleData.films.map($.getJSON) );
      })
      // get movies which the character was appeared in, sort them
      .then(function( films ) {
        character.films = films.map(function( movie ) {
          return {
            "id": movie.episode_id,
            "title": movie.title
          };
        });
        character.films.sort(function(a, b) {
          return a.id - b.id;
        });
        // send all the data
        self.data = character;
        self.check = id;
      })
      .catch(function() {
        alert('Ooops, something went wrong! Please, reload the page.')
      });
  }
}

function View(model) {
  var self = this;

  self.init = function() {
    var $all = tmpl($("#all-template").html());
    $('.wrapper').append($all);

    self.elements = {
      mainContainer: $('.hero__main'),
      moviesContainer: $('.hero__movies')
    };

    setTimeout(function run() {
      if (model.data) {
        return self.render(model.data);
      }
      setTimeout(run, 50);
    }, 100);

    self.startLoading();
    self.stopLoading();
  };

  self.render = function(data) {
    var main = tmpl($('#main-template').html(), data);
    var movies = tmpl($('#movies-template').html(), data);
    self.elements.mainContainer.html(main);
    self.elements.moviesContainer.html(movies);
  };

  self.startLoading = function() {
    $( document ).ajaxStart(function() {
      $( ".loading" ).show();
    });
  };

  self.stopLoading = function() {
    $( document ).ajaxStop(function() {
      $( ".loading" ).hide();
    });
  };

  self.init();
}

function Controller(model, view) {
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

$(function() {

  var link = 'http://swapi.co/api/people/',
      model = new Model(link),
      view = new View(model),
      controller = new Controller(model, view);

});
