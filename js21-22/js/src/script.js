$(function(){

  let allQuestions = [
    {
        question: "Check the sentence where is used Present Continious tense:",
        choices: ["She looked at a picture.", "We often take photos.",
                  "They are riding a bike.", "I have just had a cup of tea." ]
    },
    {
        question: "Check the sentence where is used Present Simple tense:",
        choices: ["She looked at a picture.", "We often take photos.",
                  "They are riding a bike.", "I have just had a cup of tea."]
    },
    {
        question: "Check the sentence where is used Present Perfect tense:",
        choices: ["She looked at a picture.", "We often take photos.",
                  "They are riding a bike.", "I have just had a cup of tea."]
    },
    {
        question: "Check the sentence where is used Past Simple tense:",
        choices: ["She looked at a picture.", "We often take photos.",
                  "They are riding a bike.", "I have just had a cup of tea."]
    }
  ]
  let correctAnswer = {
    one: 2,
    two: 1,
    three: 3,
    four: 0
  }
  let answer = {}

  localStorage.setItem('questions', JSON.stringify(allQuestions))
  let loadedQuestions = localStorage.getItem('questions')
  loadedQuestions = JSON.parse(loadedQuestions)

  localStorage.setItem('answers', JSON.stringify(correctAnswer))
  let loadedAnswers = localStorage.getItem('answers')
  loadedAnswers = JSON.parse(loadedAnswers)

  let submitBtn = $('#myBtn')
  let currentQuestion = 0
  let tally = 0

  let quizForm = $('#quiz')
  let question = 0
  let choices = 0
  let radioButtons = [$('input[name="radioOption0"]'), $('input[name="radioOption1"]'), $('input[name="radioOption2"]'),
                     $('input[name="radioOption3"]')]

  submitBtn.attr('value', 'Проверить мои результаты')

  let objTest = {

    askQuestion () {

        for (let j = 0; j < 4; j++) {
          if (loadedQuestions) {
            choices = loadedQuestions[currentQuestion].choices
            question = loadedQuestions[currentQuestion].question

          } else {
            choices = allQuestions[currentQuestion].choices
            question = allQuestions[currentQuestion].question
          }

          quizForm.append(
            $("<h2>" + (j + 1) + "." + question + "</h2>")
          )

            for (let i = 0; i < choices.length; i++) {
              quizForm.append(
                $("<label><input type='radio' name='radioOption" + j + "'value='" + choices[i] + "'/>" + choices[i] + "</label>"),
                $('<br>')
              )
            }

            currentQuestion++
        }
    },

    lookForChecked () {
      if (loadedAnswers) {
        answer = loadedAnswers

      } else {
        answer = correctAnswer
      }

        if (radioButtons.length > 1) {

          if ($("input:radio[name='radioOption0']")
                .index($("input:radio[name='radioOption0']:checked")) == answer.one) {
              tally++
          }
          if ($("input:radio[name='radioOption1']")
                .index($("input:radio[name='radioOption1']:checked")) == answer.two) {
              tally++
          }
          if ($("input:radio[name='radioOption2']")
                .index($("input:radio[name='radioOption2']:checked")) == answer.three) {
              tally++
          }
          if ($("input:radio[name='radioOption3']")
                .index($("input:radio[name='radioOption3']:checked")) == answer.four) {
              tally++
          }
        }

            objTest.modal()
            tally = 0
    },

    modal () {
        let rates1 = $('input[name="radioOption0"]')
        let rates2 = $('input[name="radioOption1"]')
        let rates3 = $('input[name="radioOption2"]')
        let rates4 = $('input[name="radioOption3"]')

        let rate_value1 = 'undefined'
        let rate_value2 = 'undefined'
        let rate_value3 = 'undefined'
        let rate_value4 = 'undefined'

        for (let i = 0; i < rates1.length; i++) {
            if (rates1[i].type == "radio" && rates1[i].checked) {
                rate_value1 = rates1[i].value
            }
        }
        for (let i = 0; i < rates2.length; i++) {
            if (rates2[i].type == "radio" && rates2[i].checked) {
                rate_value2 = rates2[i].value
            }
        }
        for (let i = 0; i < rates3.length; i++) {
            if (rates3[i].type == "radio" && rates3[i].checked) {
                rate_value3 = rates3[i].value
            }
        }
        for (let i = 0; i < rates4.length; i++) {
            if (rates4[i].type == "radio" && rates4[i].checked) {
                rate_value4 = rates4[i].value
            }
        }

        if (rate_value1 == 'undefined' || rate_value2 == 'undefined' || rate_value3 == 'undefined' || rate_value4 == 'undefined') {
          alert("Не все ответы выбраны!")
        } else {
          $('.wrapper').append(
            $('<div/>')
              .addClass("modal-overlay")
              .append('<div class = "modal-container"></div>')
          )
          $('.modal-container').append(
            $('<h2>')
              .text('Ваши результаты'),
            $('</p>')
              .addClass('results')
              .text("Вы ответили правильно на " + tally + " вопрос(a) из " + loadedQuestions.length),
              $('</p>')
              .addClass('closeButton')
              .text('Закрыть'),
            $('</p>')
              .addClass('clearStorage')
              .text('Очистить внутреннее хранилище')
          )

          $('.clearStorage').one('click', function() {
            localStorage.clear()
          })

          $(document).one("click", ".closeButton", function() {
            $('.modal-overlay').remove()
          })

          $('input[type=radio]').prop('checked', false)
        }

      }

  }

  objTest.askQuestion()

  submitBtn.on('click', objTest.lookForChecked)

});

let test = {
  sayHello (name){
    return 'Hello, ' + name + '!'
  }
}

try {
  module.exports = test
} catch (e) {

}
