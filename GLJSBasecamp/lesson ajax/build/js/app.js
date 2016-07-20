requirejs.config({
  paths: {
    'jquery': "https://code.jquery.com/jquery-3.1.0.min",
    'Model': 'model-MVC',
    'View': 'view-MVC',
    'Controller': 'controller-MVC'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});

require(
  [
    'jquery',
    'tmpl',
    'Model',
    'View',
    'Controller'
  ],
  function($, tmpl, Model, View, Controller) {

    var link = 'http://swapi.co/api/people/',
        model = new Model.Model(link),
        view = new View.View(model),
        controller = new Controller.Controller(model, view);

  }
);
