/* Найдите и исправьте ошибки в коде:

var x = prompt('x', 0);
var error;

switch (x) {
    case 0: error = 'На ноль делить нельзя';
    case 1: error = 'На единицу делить бессмысленно';
    case NaN: error = 'Не математическая операция';
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}
*/

var x = +(prompt('x', 0));
var error = '';

switch (x) {
    case 0: error = 'На ноль делить нельзя'; break;
    case 1: error = 'На единицу делить бессмысленно'; break;
}

if (Number.isNaN(x)) {
  error = 'Не математическая операция';
}


if (error) {
    alert(error);
} else {
    alert(100 / x);
}
