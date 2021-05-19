/* На сайте есть три колонки разной высоты, заданной в единицах измерения веб (значения вводятся в prompt в формате “50px”, “20px”...).
Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его.
 Учтите, что Math.max не работает со строками. */

var firstColumn = parseInt(prompt('Введите размер первой колонки'));
var secondColum = parseInt(prompt('Введите размер второй колонки'));
var thirdColum = parseInt(prompt('Введите размер третей колонки'));

var largestColumn = alert('Самая большая колонка: ' + ( Math.max(firstColumn, secondColum, thirdColum)) + 'px');
