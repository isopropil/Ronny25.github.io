'use strict';

$(function() {

  var $wrapper = $('.wrapper');
  // создание оборачивающего дива для кастомного grid
  $wrapper.append(
    $('<div>')
      .attr('class', 'gridDiv')
  );
  var $gridDiv = $('.gridDiv');
  var $search = "";

  // старт поиска по нажатию кнопки или Enter
  $( ".searchButton" ).on('click', searching);
  $( ".searchText" ).on('keypress', function(e) {
    if(e.which == 13) {
        searching();
    }
  });


  function searching() {
    $search = $( '.searchText' ).val();
    $('.gridItem').remove();
    $('.noResults').remove();

    // получение данных поискового запроса
    var API_KEY = '2574751-d32821dd6594ad25f642f93c2';
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&per_page=75"+"&q="+encodeURIComponent($search);

    $.getJSON(URL, function(data) {

        if (parseInt(data.totalHits) > 0){

            $.each(data.hits, function(i, hit) {

              function parseUrl( url ) {
                  var $img = $('<img>');
                  $img.src = url;
                  var $links = $('<a href='+ $img.src +'><img src=' + $img.src + '></a>');


                  $gridDiv.append(
                    $('<div>')
                      .attr('class', 'gridItem')
                      .append($links)
                  );

                  $links.attr('target', "_blank");
                    $('.gridItem img').attr({
                        class: 'gridImg'
                    });

                  return $img;
              }

              parseUrl(hit.webformatURL);
            });

        } else {
          $wrapper.append(
            $('<p class = "noResults">')
              .text('К сожалению результаты поиска отсутсвуют, попробуйте еще раз...')
          );
        }
    })
    // действия с результатами поиска после их получения
    .success(function() {
      $('.gridDiv').gridDiv({
        'colums': 4, //columns number
        'margin': 10 //right and bottom margin
      });

      var timerId = setInterval(function() {
        $('.gridDiv').gridDiv('refresh');
      }, 100);
      // через 5 сек остановить повторы
      setTimeout(function() {
        clearInterval(timerId);
      }, 5500);

    });
  }

  // изменение структуры отображения результатов в зависимости от изменения размеров окна браузера
  var time = undefined;
  //update columns size on window resize
    $( window ).on('resize', function(e) {
      clearTimeout(time);
      time = setTimeout(function(){
        $('.gridDiv').gridDiv('refresh');
      }, 200);
    })


  // создаем классы
  function Human() {
    this.name = 'Тони';
    this.age = 24;
    this.sex = 'мужской';
    this.height = 180;
    this.weight = 75;
  }

  function Worker() {
    this.workPlace = 'школа';
    this.salary = 5000;
    this.work = function() {
      alert('Тишина на уроке!');
    }
  }

  function Student() {
    this.studyPlace = 'GoIt';
    this.grant = 925;
    this.watchTVSeries = function() {
      alert('Когда там следующий сезон выходит?..');
    }
  }

  Worker.prototype = new Human();
  Student.prototype = new Human();

  var newWorker = new Worker();
  var newStudent = new Student();

  console.log('newWorker.sex', newWorker.sex);
  console.log('newStudent.name', newStudent.name);
  console.log('newWorker.height', newWorker.height);
  console.log('newStudent.age', newStudent.age);
  console.log('newStudent.weight', newStudent.weight);
  console.log('newWorker.salary', newWorker.salary);
  console.log('newStudent.studyPlace', newStudent.studyPlace);

  // newStudent.watchTVSeries();
});
