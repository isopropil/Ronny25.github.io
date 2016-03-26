// добавляем wrapper
var wrapper = document.createElement('div');
wrapper.className = "wrapper";

document.body.insertBefore(wrapper, document.body.firstChild);

// добавляем заголовок
var title = document.createElement('div');
title.className = "title";

wrapper.insertBefore(title, wrapper.firstChild);

// добавляем текст в заголовок
var textTitle = document.createElement('p');
textTitle.className = "title-text";
textTitle.innerHTML = 'Тест по программированию';

title.insertBefore(textTitle, title.firstChild);

// добавляем поле для первой группы вопросов
var firstQuestions = document.createElement('div');
firstQuestions.className = "questions first";

wrapper.appendChild(firstQuestions);

// создаем заголовок для первой группы
var firstQuestionsTitle = document.createElement('p');

firstQuestionsTitle.className = "questions-title";
firstQuestionsTitle.innerHTML = '1. Вопрос №1';

firstQuestions.insertBefore(firstQuestionsTitle, firstQuestions.firstChild);

// добавляем переключатели в первое поле группы вопросов
var radio1 = document.createElement('input');
radio1.type = "radio";
radio1.name = "radio-first";
radio1.id = "radio1";
radio1.value = "1";

var label1 = document.createElement('label');
label1.htmlFor = "radio1";
label1.appendChild(document.createTextNode('Вариант ответа №1'));

firstQuestions.appendChild(radio1);
firstQuestions.appendChild(label1);

var br = document.createElement("br");
firstQuestions.appendChild(br);

var radio2 = radio1.cloneNode(true);
radio2.id = "radio2";
radio2.value = "2";

var label2 = document.createElement('label');
label2.htmlFor = "radio2";
label2.appendChild(document.createTextNode('Вариант ответа №2'));

firstQuestions.appendChild(radio2);
firstQuestions.appendChild(label2);

var br2 = document.createElement("br");
firstQuestions.appendChild(br2);

var radio3 = radio2.cloneNode(true);
radio3.id = "radio3";
radio3.value = "3";

var label3 = document.createElement('label');
label3.htmlFor = "radio3";
label3.appendChild(document.createTextNode('Вариант ответа №3'));

firstQuestions.appendChild(radio3);
firstQuestions.appendChild(label3);

// клонируем поле вопросов 2
var secondQuestions = firstQuestions.cloneNode(false);

firstQuestions.parentNode.insertBefore(secondQuestions, firstQuestions.nextSibling);

// редактируем поле вопросов №2
function removeClass(secondQuestions, cls) {
  var classes = secondQuestions.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс
      i--; // (*)
    }
  }

  secondQuestions.className = classes.join(' ');
}

removeClass(secondQuestions, 'first');
secondQuestions.classList.add('second');

// создаем заголовок для второй группы
var secondQuestionsTitle = document.createElement('p');

secondQuestionsTitle.className = "questions-title";
secondQuestionsTitle.innerHTML = '2. Вопрос №2';

secondQuestions.insertBefore(secondQuestionsTitle, secondQuestions.firstChild);

// добавляем переключатели во второе поле группы вопросов
var radio4 = document.createElement('input');
radio4.type = "radio";
radio4.name = "radio-second";
radio4.id = "radio4";
radio4.value = "1";

var label4 = document.createElement('label');
label4.htmlFor = "radio4";
label4.appendChild(document.createTextNode('Вариант ответа №1'));

secondQuestions.appendChild(radio4);
secondQuestions.appendChild(label4);

var br3 = document.createElement("br");
secondQuestions.appendChild(br3);

var radio5 = radio4.cloneNode(true);
radio5.id = "radio5";
radio5.value = "2";

var label5 = document.createElement('label');
label5.htmlFor = "radio5";
label5.appendChild(document.createTextNode('Вариант ответа №2'));

secondQuestions.appendChild(radio5);
secondQuestions.appendChild(label5);

var br4 = document.createElement("br");
secondQuestions.appendChild(br4);

var radio6 = radio5.cloneNode(true);
radio6.id = "radio6";
radio6.value = "3";

var label6 = document.createElement('label');
label6.htmlFor = "radio6";
label6.appendChild(document.createTextNode('Вариант ответа №3'));

secondQuestions.appendChild(radio6);
secondQuestions.appendChild(label6);

// клонируем поле вопросов 3
var thirdQuestions = secondQuestions.cloneNode(false);

secondQuestions.parentNode.insertBefore(thirdQuestions, secondQuestions.nextSibling);

// редактируем поле вопросов №3
function removeClass(thirdQuestions, cls) {
  var classes = thirdQuestions.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс
      i--; // (*)
    }
  }

  thirdQuestions.className = classes.join(' ');
}

removeClass(thirdQuestions, 'second');
thirdQuestions.classList.add('third');

// создаем заголовок для третьей группы
var thirdQuestionsTitle = document.createElement('p');

thirdQuestionsTitle.className = "questions-title";
thirdQuestionsTitle.innerHTML = '3. Вопрос №3';

thirdQuestions.insertBefore(thirdQuestionsTitle, thirdQuestions.firstChild);

// добавляем переключатели в третье поле группы вопросов
var radio7 = document.createElement('input');
radio7.type = "radio";
radio7.name = "radio-third";
radio7.id = "radio7";
radio7.value = "1";

var label7 = document.createElement('label');
label7.htmlFor = "radio7";
label7.appendChild(document.createTextNode('Вариант ответа №1'));

thirdQuestions.appendChild(radio7);
thirdQuestions.appendChild(label7);

var br5 = document.createElement("br");
thirdQuestions.appendChild(br5);

var radio8 = radio7.cloneNode(true);
radio8.id = "radio8";
radio8.value = "2";

var label8 = document.createElement('label');
label8.htmlFor = "radio8";
label8.appendChild(document.createTextNode('Вариант ответа №2'));

thirdQuestions.appendChild(radio8);
thirdQuestions.appendChild(label8);

var br6 = document.createElement("br");
thirdQuestions.appendChild(br6);

var radio9 = radio8.cloneNode(true);
radio9.id = "radio9";
radio9.value = "3";

var label9 = document.createElement('label');
label9.htmlFor = "radio9";
label9.appendChild(document.createTextNode('Вариант ответа №3'));

thirdQuestions.appendChild(radio9);
thirdQuestions.appendChild(label9);

// Добавляем кнопку проверки выбранных ответов
var result = document.createElement('input');
result.type = "button";
result.id = "buttonCheck";
result.value = "Проверить результаты";
result.onClick = "showResult";

wrapper.appendChild(result);

// Выведение результата выбранных ответов
document.getElementById("buttonCheck").onclick = function () {
    var rates1 = document.getElementsByName('radio-first');
    var rates2 = document.getElementsByName('radio-second');
    var rates3 = document.getElementsByName('radio-third');

    var rate_value1 = 'undefined';
    var rate_value2 = 'undefined';
    var rate_value3 = 'undefined';

    for (var i = 0; i < rates1.length; i++) {
        if (rates1[i].type == "radio" && rates1[i].checked) {
            rate_value1 = rates1[i].value;
            console.log('Ответ на вопрос №1 = ', rate_value1);
        } else if (rate_value1 === 'undefined') {
          console.log('error');
        }
    }

    for (var i = 0; i < rates2.length; i++) {
        if (rates2[i].type == "radio" && rates2[i].checked) {
            rate_value2 = rates2[i].value;
            console.log('Ответ на вопрос №1 = ', rate_value2);
        }
    }

    for (var i = 0; i < rates3.length; i++) {
        if (rates3[i].type == "radio" && rates3[i].checked) {
            rate_value3 = rates3[i].value;
            console.log('Ответ на вопрос №1 = ', rate_value3);
        }
    }

    if (rate_value1 == 'undefined' || rate_value2 == 'undefined' || rate_value3 == 'undefined') {
      alert("Не все ответы выбраны!");
    } else {
      alert("Ответ на вопрос №1 = " + rate_value1 + '\n' +
      "Ответ на вопрос №2 = " + rate_value2 + '\n' +
      "Ответ на вопрос №3 = " + rate_value3);
    }

}
