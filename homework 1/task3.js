/* Создайте переменные firstName и lastName для хранение имени и фамилии, запишите в них значения из модального окна prompt.
Выведите на экран приветствие (“What’s up John Doe”), используя конкатенацию и экранирование символов.
Имя и фамилию выводите заглавными буквами независимо от того, как они были введены. */

var firstName = prompt('Введите имя', 'John');
var lastName = prompt('Введите фамилию', 'Doe');
alert('What\'s  up' + ' ' + firstName.toUpperCase() + ' '  + lastName.toUpperCase());
