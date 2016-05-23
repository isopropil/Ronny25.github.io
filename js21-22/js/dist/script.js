"use strict";

$(function () {

  var allQuestions = [{
    question: "Check the sentence where is used Present Continious tense:",
    choices: ["She looked at a picture.", "We often take photos.", "They are riding a bike.", "I have just had a cup of tea."]
  }, {
    question: "Check the sentence where is used Present Simple tense:",
    choices: ["She looked at a picture.", "We often take photos.", "They are riding a bike.", "I have just had a cup of tea."]
  }, {
    question: "Check the sentence where is used Present Perfect tense:",
    choices: ["She looked at a picture.", "We often take photos.", "They are riding a bike.", "I have just had a cup of tea."]
  }, {
    question: "Check the sentence where is used Past Simple tense:",
    choices: ["She looked at a picture.", "We often take photos.", "They are riding a bike.", "I have just had a cup of tea."]
  }];
  var correctAnswer = {
    one: 2,
    two: 1,
    three: 3,
    four: 0
  };
  var answer = {};

  localStorage.setItem('questions', JSON.stringify(allQuestions));
  var loadedQuestions = localStorage.getItem('questions');
  loadedQuestions = JSON.parse(loadedQuestions);

  localStorage.setItem('answers', JSON.stringify(correctAnswer));
  var loadedAnswers = localStorage.getItem('answers');
  loadedAnswers = JSON.parse(loadedAnswers);

  var submitBtn = $('#myBtn');
  var currentQuestion = 0;
  var tally = 0;

  var quizForm = $('#quiz');
  var question = 0;
  var choices = 0;
  var radioButtons = [$('input[name="radioOption0"]'), $('input[name="radioOption1"]'), $('input[name="radioOption2"]'), $('input[name="radioOption3"]')];

  submitBtn.attr('value', 'Проверить мои результаты');

  var objTest = {
    askQuestion: function askQuestion() {

      for (var j = 0; j < 4; j++) {
        if (loadedQuestions) {
          choices = loadedQuestions[currentQuestion].choices;
          question = loadedQuestions[currentQuestion].question;
        } else {
          choices = allQuestions[currentQuestion].choices;
          question = allQuestions[currentQuestion].question;
        }

        quizForm.append($("<h2>" + (j + 1) + "." + question + "</h2>"));

        for (var i = 0; i < choices.length; i++) {
          quizForm.append($("<label><input type='radio' name='radioOption" + j + "'value='" + choices[i] + "'/>" + choices[i] + "</label>"), $('<br>'));
        }

        currentQuestion++;
      }
    },
    lookForChecked: function lookForChecked() {
      if (loadedAnswers) {
        answer = loadedAnswers;
      } else {
        answer = correctAnswer;
      }

      if (radioButtons.length > 1) {

        if ($("input:radio[name='radioOption0']").index($("input:radio[name='radioOption0']:checked")) == answer.one) {
          tally++;
        }
        if ($("input:radio[name='radioOption1']").index($("input:radio[name='radioOption1']:checked")) == answer.two) {
          tally++;
        }
        if ($("input:radio[name='radioOption2']").index($("input:radio[name='radioOption2']:checked")) == answer.three) {
          tally++;
        }
        if ($("input:radio[name='radioOption3']").index($("input:radio[name='radioOption3']:checked")) == answer.four) {
          tally++;
        }
      }

      objTest.modal();
      tally = 0;
    },
    modal: function modal() {
      var rates1 = $('input[name="radioOption0"]');
      var rates2 = $('input[name="radioOption1"]');
      var rates3 = $('input[name="radioOption2"]');
      var rates4 = $('input[name="radioOption3"]');

      var rate_value1 = 'undefined';
      var rate_value2 = 'undefined';
      var rate_value3 = 'undefined';
      var rate_value4 = 'undefined';

      for (var i = 0; i < rates1.length; i++) {
        if (rates1[i].type == "radio" && rates1[i].checked) {
          rate_value1 = rates1[i].value;
        }
      }
      for (var _i = 0; _i < rates2.length; _i++) {
        if (rates2[_i].type == "radio" && rates2[_i].checked) {
          rate_value2 = rates2[_i].value;
        }
      }
      for (var _i2 = 0; _i2 < rates3.length; _i2++) {
        if (rates3[_i2].type == "radio" && rates3[_i2].checked) {
          rate_value3 = rates3[_i2].value;
        }
      }
      for (var _i3 = 0; _i3 < rates4.length; _i3++) {
        if (rates4[_i3].type == "radio" && rates4[_i3].checked) {
          rate_value4 = rates4[_i3].value;
        }
      }

      if (rate_value1 == 'undefined' || rate_value2 == 'undefined' || rate_value3 == 'undefined' || rate_value4 == 'undefined') {
        alert("Не все ответы выбраны!");
      } else {
        $('.wrapper').append($('<div/>').addClass("modal-overlay").append('<div class = "modal-container"></div>'));
        $('.modal-container').append($('<h2>').text('Ваши результаты'), $('</p>').addClass('results').text("Вы ответили правильно на " + tally + " вопрос(a) из " + loadedQuestions.length), $('</p>').addClass('closeButton').text('Закрыть'), $('</p>').addClass('clearStorage').text('Очистить внутреннее хранилище'));

        $('.clearStorage').one('click', function () {
          localStorage.clear();
        });

        $(document).one("click", ".closeButton", function () {
          $('.modal-overlay').remove();
        });

        $('input[type=radio]').prop('checked', false);
      }
    }
  };

  objTest.askQuestion();

  submitBtn.on('click', objTest.lookForChecked);
});

var test = {
  sayHello: function sayHello(name) {
    return 'Hello, ' + name + '!';
  }
};

try {
  module.exports = test;
} catch (e) {}