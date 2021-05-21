/* Напишите калькулятор для конвертации единиц измерения количества информации (байт, килобайт, мегабайт, гигабайт).
Значения считаются из prompt, результаты отображаются в alert. Используйте константы там, где это логически оправдано. */

const BYTES_IN_KB = 1024;
const BYTES_IN_MB = BYTES_IN_KB * 1024;
const BYTES_IN_GB = BYTES_IN_MB * 1024;

var numberInByte = parseInt(prompt('Введите число  в байтах'));
alert(`${numberInByte} байт`);
var numberInKb = parseInt(prompt('Введите число килобайтах'));
alert(`В ${ numberInKb} килобайтах ${ numberInKb * BYTES_IN_KB} байт`);
var numberInMb = parseInt(prompt('Введите число мегабайтах'));
alert(`В ${numberInMb} мегабайтах ${ numberInMb * BYTES_IN_MB} байт`);
var numberInGb = parseInt(prompt('Введите число в гигабайтах'));
alert(`В ${numberInGb} гигабайтах ${ numberInGb * BYTES_IN_GB} байт`);
