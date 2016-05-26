// MVC
function Model(data) {
  var self = this;

  self.data = data;

  self.addItem = function(item) {
    if (item.length === 0) {
      return;
    }

    self.data.push(item);

    return self.data;
  };

  self.removeItem = function(item) {
    var index = self.data.indexOf(item);

    if (index === -1) {
      return;
    }

    self.data.splice(index, 1);

    return self.data;
  };

  self.editItem = function(index, item) {
    self.data[index] = item;

    return self.data;
  };

}

function View(model) {
  var self = this;

  self.init = function() {
    var wrapper = tmpl($('#wrapper-template').html());
    $('body').append(wrapper);

    self.elements = {
      input: $('.item-value'),
      addBtn: $('.item-add'),
      listContainer: $('.item-list')
    };

    self.renderList(model.data);
  };

  self.renderList = function(data) {
    var list = tmpl($('#list-template').html(), {data: data});
    self.elements.listContainer.html(list);
  };

  self.init();
}

function Controller(model, view){
  var self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.input.on('keypress', detectKey);
  view.elements.listContainer.on('click', '.item-delete', removeItem);
  view.elements.listContainer.on('focusout', saveEdits);

  function addItem() {
    var newItem = view.elements.input.val();
    model.addItem(newItem);

    view.renderList(model.data);

    view.elements.input.val('');
  };

  function removeItem() {
    var item = $(this).attr('data-value');

    model.removeItem(item);

    view.renderList(model.data);
  };

  function saveEdits(event) {
    var target = $( event.target );
    var index = model.data.indexOf(target.attr('data-value'));
    var item = target.text();

    model.editItem(index, item);

    view.renderList(model.data);
  };

  function detectKey(e) {

    if(e.which == 13) {
      addItem();
    }

  };

}

$(function() {

  var firstTodoList = ['сделать домашки', 'сделать экзамен', 'гульнуть'];
  var model = new Model(firstTodoList);
  var view = new View(model);
  var controller = new Controller(model, view);

});
