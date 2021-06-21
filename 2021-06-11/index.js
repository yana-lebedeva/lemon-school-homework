/* (1) Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), 
при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message. */

let coffeeMachine = {
  message: 'Your coffee is ready!',
  start() {
    console.log(coffeeMachine.message);
  }
};

setTimeout(function() {
  coffeeMachine.start();
}, 3000);


/* (2) Создайте функцию hello(), которая выводит приветствие пользователю. 
Создайте два объекта, содержащие поля firstname, lastname. 
Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально. */

function hello() {
  console.log(`Hello, ${this.firstName}  ${this.lastName}!`);
}

let jane = {
  firstName: 'Jane',
  lastName: 'Smith'
}

let david = {
  firstName:'David',
  lastName: 'Jones'
}

hello.call(jane);
hello.call(david);

/* (3) Создайте объект array с методом инициализации начального значения массива, c методами добавления, 
удаления последнего элемента массива и методом возврата текущего состояния массива. 
Используйте концепцию chaining для создания цепочки вызовов. */

let array = {
  value: [],
  setValue(value) { 
    this.value = value;
    return this;
  },
  getValue() { 
    return this.value;
  },
  push(value) {
    this.value.push(value);
    return this;
  },
  pop() {
    this.value.pop();
    return this;
  }
}

array.setValue([1]).push(2).push(3).push(3).pop();

let currentValue = array.getValue();
console.log(currentValue);


/* (4) Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии: */

let numbers = [6, 5, 3];

function rec(arr, index) {
  if (index > arr.length - 1) {
    return 0;
  }

  return arr[index] + rec(arr, index + 1);
}
let sum = rec(numbers, 0);
console.log(sum);


/* (5) Есть следующий код:

Есть следующий код:
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
format.call(/* Ваш код */; // Ukraine
//format.apply(/* Ваш код */); // [Ukraine]
//format.call(/* Ваш код */); // Kyiv
//format.apply(/* Ваш код */); // Kyiv
//format.apply(/* Ваш код */); // undefined */


var country = {
  name: 'Ukraine',
  language: 'ukrainian',
  capital: {
      name: 'Kyiv',
      population: 2907817,
      area: 847.66
  }
};

function format(start, end) {
  console.log(start + this.name + end);
}

format.call(country, '', '')
format.apply(country, ['[', ']'] );
format.call(country.capital, '', '' );
format.apply(country.capital, ['', '']) ;
format.apply({}, ['', '']);

/* (6) Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

function format(start, end) {
    console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind(). */

// 1

let user = {
  name: 'John'
}

function format(start, end) {
  console.log(start + this.name + end);
}

let userFormat = function(start, end) {
 format.call(user, start, end);
}
userFormat('<<<', '>>>');

// 2

let user = {
  name: 'John'
}

function format(start, end) {
  console.log(start + this.name + end);
}

let userFormatV2 = format.bind(user);
userFormatV2('<<<', '>>>');


