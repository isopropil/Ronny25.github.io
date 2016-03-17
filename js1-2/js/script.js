// Возведения указанного числа в указанную степень

function pow(x, n){
  var result = x;

  for (var i = 1; i < n; i++){
    result *= x;
  }

  return result;
}

var x = +prompt('Введите число', '');
var n = +prompt('Введите степень', '');

console.log( 'Результат возведения в степень = ', pow(x, n) );


// Работа с массивом

var names = [];

  for(var i = 0; i < 5; i++){
    names.push( prompt("Введите имя", '') );
  }

  console.log('Массив имен = ', names);

//Сравнение имени пользователя с именами в массиве

  var userName = prompt('Введите имя пользователя', '');

  if ( names.indexOf(userName) >= 0) {
    console.log(userName + ', вы успешно вошли');
  } else {
    console.log('Неверное имя пользователя');
    alert('Неверное имя пользователя');
  }
