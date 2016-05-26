requirejs.config({
  paths: {
    'jquery': "https://code.jquery.com/jquery-1.12.4.min",
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

        var firstTodoList = ['сделать домашки', 'сделать экзамен', 'гульнуть'];
        var model = new Model.Model(firstTodoList);
        var view = new View.View(model);
        var controller = new Controller.Controller(model, view);

  }
);
