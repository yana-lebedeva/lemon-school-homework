/* Сформируйте строку в виде треугольника-елочки:

.....#.....
....###....
...#####...
..#######..
.#########.
###########

*/

var string = '';
for (var i = 0; i < 6; i++ ) {
  for (var j = 0; j < 11; j ++) {
    if (j >= 5 - i && j <= 5 + i ) {
      string += '#';
    } else {
      string += '.';
    }
  } 
  string += '\n';
}

console.log(string);
