$(function(){



var objTest = {

    docBody: document.body,

    outputHeaderTest: function() {
        var elementHeaderTest = document.createElement('h1');
        elementHeaderTest.className = 'main-header';
        elementHeaderTest.innerHTML = 'Тест по программированию';
        elementHeaderTest.style.textAlign = 'center';
        this.docBody.insertBefore(elementHeaderTest, this.docBody.firstChild);
    },

    outputQuestions: function() {
        var elementForm = document.createElement('form');
        this.docBody.insertBefore(elementForm, this.docBody.lastChild);

        for (var i = 1; i <= 3; i++) {

            var elementQuestionTitle = document.createElement('p');
            elementQuestionTitle.className = 'form__question-title';
            elementQuestionTitle.innerHTML = i+ '. Вопрос №' + i;
            elementForm.appendChild(elementQuestionTitle);

            for (var j=1; j <= 3; j++) {

                var elementDivForCheckbox = document.createElement('div');
                elementDivForCheckbox.className = 'form__checkbox-position';
                elementForm.appendChild(elementDivForCheckbox);

                var elementCheckbox = document.createElement('input');
                elementCheckbox.type = 'checkbox';
                elementCheckbox.className = 'form__checkbox';
                elementCheckbox.id = 'id-checbox' + i + '_' + j;
                elementDivForCheckbox.appendChild(elementCheckbox);

                var elementLabel = document.createElement('label');
                elementLabel.className = 'form__label';
                elementLabel.htmlFor = 'id-checbox' + i + '_' + j;
                elementLabel.id = 'id-checbox' + i + '_' + j;
                elementDivForCheckbox.appendChild(elementLabel);

                var textCheckbox = document.createTextNode('Вариант ответа №' + j);
               elementLabel.appendChild(textCheckbox);
            }
        }

        var divForButton = document.createElement('div');
        divForButton.className = 'form__button-position';
        elementForm.appendChild(divForButton);


        var formButton = document.createElement('input');
        formButton.type = 'submit';
        formButton.value = 'Проверить мои результаты';
        formButton.className = 'form__button';
        divForButton.appendChild(formButton);
    }
}

objTest.outputHeaderTest();
objTest.outputQuestions();


});
