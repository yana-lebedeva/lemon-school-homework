/* Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации с помощью цикла for. 
После выхода из цикла распечатайте полученную строку. */

var string = '';
for (var i = 0; i < 11; i++) {
  if (i % 2) {
    string += '#';
  } else {
    string += '.';
  }
}
alert(string);