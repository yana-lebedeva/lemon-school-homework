/* Создайте переменные x и y для хранения числа. Значения переменные получают из prompt.
Рассчитайте произведение, частное, разность и сумму этих значений.
Результат последовательно отобразите в модальном окне. (Процесс вычисления посмотрите в debugger. */

var x = +prompt('Введите число', 10);
var y = +prompt('Введите число', 5);

alert(`Произведение чисел: ${ x * y }`);
alert(`Частное чисел: ${ x / y }`);
alert(`Разность чисел: ${ x - y }`);
alert(`Сумма чисел: ${ x + y }`);
