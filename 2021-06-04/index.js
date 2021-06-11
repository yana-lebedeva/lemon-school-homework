/* (1) Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, 
то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне. 
Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки. 
Используя эти псевдонимы получите значение из prompt и отобразите в alert. 
А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага. */

function p(message, value) {
  let input = prompt(message, value);
  return input;
}
let resultP = p('Введите ваше имя', 'Yana');
console.log(resultP);

debugger;

function a(message) {
  return message;
}
let resultA = a(`Hello ${ resultP}`);
console.log(resultA);


function d() {
  debugger;
}
let resultD = d();
console.log(resultD);


/* (2) Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), 
которая сравнивает два числа и возвращает большее: */

let max = (a, b) => {
  if (a > b) {
    return a;
  } else {
   return b;
  }
}

let minNumber = max(40, 7);
console.log(minNumber);


/* (3) Используя синтаксис ES5, напишите функцию-аналог Math.min(). 
Функция принимает любое количество чисел и возвращает меньшее из них: */

function min() {
  console.log(arguments);

  let minValue = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < minValue) {
      minValue = arguments[i];
    }
  }
  return minValue;
}
let minNumber = min(1, 5, 200, 6, 55, 78, 4);
console.log(minNumber);


/* (4) Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину. */

function findLongestWordLeng(string)  {
  let stringSplit = string.split(' ');
  console.log(stringSplit);

  let longestWord = '';

  for (let i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length > longestWord) {
      longestWord = stringSplit[i];
    }
  }
  return longestWord.length;
}
let longestWordAvailable = findLongestWordLeng('Аргентина манит негра');
console.log(longestWordAvailable);


/* (5) Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное 
и возвращает их */

let str = '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6';

function maxAndMin(str) {
  let numbers = str.split(' ').map(Number);

  let max = numbers[0];
  let min = numbers[0];
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];  
    }
  
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return (`Число ${max} максимальное, а число ${min} минимальное`);
}

let result = maxAndMin (str);
console.log(result);


                                // Level up

/* (1) Не используя методы массива, напишите функцию аналог метода shift. 
Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив. */

function shift(arr) {
  let newArray = [];

  for (let i = 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

let newArrayShift = shift([1, 7, 9, 'Привет', 5, 'Пока']);
console.log(newArrayShift);


/* (2) Не используя методы массива, напишите функцию аналог метода массива push. 
Функция добавляет в конец переданного в параметре массив произвольное количество элементов и возвращает новую длину массива. */

let animalsArray = ['тигр', 'енот', 'кот', 'рысь', 'собака'];

function addingAnElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let input = prompt('Введите эллемент, который хотите добавить');
    if (input === null) {
      return arr;
    } else if (input !== null) {
      arr[arr.length] = input;
    } 
  }
 return arr;
}
  
let additionResult = addingAnElement(animalsArray);
console.log(additionResult);


/* (3) Напишите функцию аналог метода ES6 Object.assign(). 
Первый параметр функции - целевой объект, поля которого будут изменены или расширены. 
Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект. */

let firstPerson = 
{ 
  firstName: 'Ann', 
  age: 20
};

let secondPerson = 
{
  firstName: 'John', 
  lastName: 'Fire'
};

function object(firstPerson, secondPerson) {
  let newObgect = {};

  for (let key in firstPerson) {
    for (let value in secondPerson) {
      newObgect[key] = firstPerson[key];
      newObgect[value] = secondPerson[value];
    }
  }
  return newObgect;
}
let newObgect = object(firstPerson, secondPerson);
console.log(newObgect);


// (4) Дан массив, элементами которого могут быть любые значения, включая другие массивы. Напишите функцию flat, которая рекурсивно “разворачивает” переданный массив на глубину depth, указанную в параметре функции. По умолчанию flat поднимает элементы на одну глубину (то есть если depth не указан). *

let array = [1, 2, [3, 4, [5, 6]]];

function flatAndUnfolded(array) {
  let newArray = array.join(',').split(',');
  let newArr = newArray.reverse();
  return newArr;
}

let newArray = flatAndUnfolded(array);
console.log(newArray);
