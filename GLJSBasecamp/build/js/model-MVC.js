define(
  'Model',
  [
    'jquery',
    'tmpl'
  ],
  function() {

    return {

      Model: function(link) {
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

    };
  }
);
