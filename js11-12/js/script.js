$(function(){

  $('.carousel-content').carousel();

  var maket = $('#maket').html();
  var data = {
    name: 'Коткин Дмитрий Петрович',
    photo: ' <img class = "photo" src = "img/photo.jpg"> ',
    student: 'Студент Восточноукраинского Национального Университета им. В.Даля',
    line1: ' <div class = "line"></div> ',
    want: 'Хочу учить фронтэнд потому что:',
    reason1: 'заборы строить не интересно',
    reason2: 'платят мало',
    reason3: 'приходиться работать по ночам',
    line2: " <div class = 'line'></div> ",
    contact: 'Мой контактный номер телефона:',
    phone: '+38 050 068 9212',
    profile: 'Мой профиль Вконтакте:',
    vk: '<a href = "http://vk.com/dkotkin">Дмитрий Коткин</a>',
    line3: " <div class = 'line'></div> ",
    feedback: 'Мой фидбэк:',
    feedText: 'Могу построить вам забор'
  };

  var content = tmpl(maket, data);

  $('body').append(content);

});
