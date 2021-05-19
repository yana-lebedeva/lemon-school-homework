/* Найдите и исправьте ошибки в коде:
  'use script';
  var x = 
    prompt('Введите X', '1')
    y = 
    prompt('Введите Y', '1');

    alert('Сумма: ' + x + y);
*/

var x = +prompt('Введите X', 1);
var y = +prompt('Введите Y', 1);
alert('Сумма: ' +  ( x + y ) );
