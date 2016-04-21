$(function(){

  $('.carousel-content').carousel();

  var maket = $('#maket').html();
  var data = {
    name: 'Коткин Дмитрий Петрович',
    photo: ' <img class = "photo" src = "img/photo.jpg"> ',
    student: 'Студент Восточноукраинского Национального Университета им. В.Даля',
    line1: ' <div class = "line"></div> ',
    want: 'Хочу учить фронтэнд потому что:',
    reason1: 'это безумно круто!',
    reason2: 'это приносит удовольствие!',
    reason3: 'это заставляет шевелить мозгами :)',
    line2: " <div class = 'line'></div> ",
    contact: 'Мой контактный номер телефона:',
    phone: '+38 050 068 9212',
    profile: 'Мой профиль Вконтакте:',
    vk: '<a href = "http://vk.com/dkotkin" target="_blank">Дмитрий Коткин</a>',
    line3: " <div class = 'line'></div> ",
    feedback: 'Мой фидбэк:',
    feedText: 'Вот-вот и сверстаю первый свой проект. Следите за обновлениями на сайте!'
  };

  var content = tmpl(maket, data);

  $('.wrapper').append(content);

});
