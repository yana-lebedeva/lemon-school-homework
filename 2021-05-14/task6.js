/* Напишите программу, которая без использования оператора сравнения определяет, 
является ли целое число, введенное пользователем, нечётным (true/false). Результат отобразите в alert. */

var number = parseInt(prompt('Введите число'));
alert(number % 2);
alert(!Boolean(number % 2));
