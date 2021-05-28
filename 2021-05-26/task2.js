/* С клавиатуры вводятся цифры. В цикле происходит проверка – если введено простое число, 
тогда происходит выход из цикла и число выводится на экране с помощью alert. */

var number = +prompt('Введите цифру');
var result;

for (var i = 2; i < number; i++) {
  if (number % i == 0) {
    result =`Число ${number} составное `;
    break;
  } else {
    result = `Число ${number} простое`;
  } 
}
  
alert(result);
