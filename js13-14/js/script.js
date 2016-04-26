// 'use strict';

$(function(){

  $('body').append(
    $('<div/>')
      .addClass('wrapper')
  );


  var objTest = {
    questions: [
      {
        title: 'Вопрос №1',
        answers: [
          {
            text: 'Ответ 1',
            correct: true
          },
          {
            text: 'Ответ 2',
            correct: false
          },
          {
            text: 'Ответ 3',
            correct: false
          }
        ]
      },
      {
        title: 'Вопрос №3',
        answers: [
          {
            text: 'Ответ 1',
            correct: true
          },
          {
            text: 'Ответ 2',
            correct: false
          },
          {
            text: 'Ответ 3',
            correct: false
          }
        ]
      },
      {
        title: 'Вопрос №3',
        answers: [
          {
            text: 'Ответ 1',
            correct: true
          },
          {
            text: 'Ответ 2',
            correct: false
          },
          {
            text: 'Ответ 3',
            correct: false
          }
        ]
      }
    ],

    generateQuestions: function() {
      for (var i = 0; i < this.questions.length; i++) {
        this.createElement('h2', 'questions-title', this.questions[i].title);
      }
    }

  };

  // а что делать дальше?
  $('.wrapper').append(objTest);
  console.log('this', this);
  objTest.generateQuestions();


});
