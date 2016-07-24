define(
  'View',
  [
    'jquery',
    'tmpl'
  ],
  function() {

    return {

      View: function(model) {
        var self = this;

        self.init = function() {
          var $all = tmpl($("#all-template").html());
          $('.wrapper').append($all);

          self.elements = {
            mainPhoto: $('.hero__img'),
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
          self.elements.mainPhoto.attr('src', function() {
            if (data.gender === 'female') {
              return 'build/img/female.jpg';
            }
            if (data.gender === 'hermaphrodite') {
              return 'build/img/herma.jpg';
            }
            return 'build/img/male.jpg';
          });
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

    };
  }
);
