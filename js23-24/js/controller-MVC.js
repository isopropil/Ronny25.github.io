define(
  'Controller',
  [
    'jquery',
    'tmpl'
  ],
  function() {

    return{

      Controller: function (model, view){
        var self = this;

        view.elements.addBtn.on('click', addItem);
        view.elements.input.on('keypress', detectKey);
        view.elements.listContainer.on('click', '.item-delete', removeItem);
        view.elements.listContainer.on('click', backColor);
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

          target.removeClass('editing');
        };

        function backColor(e) {
          var target = $( e.target );
          var item = target.text();

          target.addClass('editing');
        };

      }

    };
  }
);
