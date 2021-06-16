/* (1) Найдите и исправьте ошибки в коде:

function foo() {
	function bar(a) {
		i = 3;
		return i + a;
	}
	
	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo(); */

function foo() {
	function bar(a) {
		var i = 3;
		return i + a;
	}
	
	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo();


/* (2) Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true, 
если все элементы - числа, и false - если в массиве хотя бы  одно не число. 
Для проверки массива используйте метод every или some */

let arr1 = [1, 2, '3', 'a', 's', 6 ];
let arr2 = [1, 2, '3', '4'];

function checkNumber(arr) {

  let newArray = arr.every(v => !isNaN(v));
  
  return newArray;
};

let newArr = checkNumber(arr1);
console.log(newArr);


/* (3) “История в картинках”. Создайте массив тематически связанных строковых картинок. 
Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из элементов массива (одну из картинок). 
Тема - свободная, ограничена только набором доступных строковых картинок. */

let text = [
  'Ай-яй-яй, девчонка,', 'где взяла такие ножки?', 
  'Ай-яй-яй, девчонка,', 'топай, топай по дорожке', 
  'Ай-яй-яй, мальчишки', 'все уже сломали глазки', 
  'Ай-яй-яй, мальчишки,', 'на неё глядеть опасно', 
  'Ай-яй-яй, девчонка,', 'где же все твои подружки?', 
  'Ай-яй-яй, девчонки,', 'вам мальчишки', 'не игрушки', 
  'Ай-яй-яй, девчонка,', 'ты куда бежишь - не знаю', 
  'Ай-яй-яй, девчонка, ', 'за тобой не успеваю',
];


let emoji = [
 '😱💃', '🦵❓', 
 '😱💃', '🚶‍♀️🛣', 
 '😱🧍🧍🧍','👨‍🦯', 
 '😱🧍🧍🧍', '💃👀🌋', 
 '😱💃','👯❓', 
 '😱👯', '🧍🧍‍♂️🧍', '🙅‍♂️🎮🎮', 
 '😱💃', '🏃‍♀️🤷‍♂️', 
 '😱💃', '⌚🏃‍'
];
 

function textString(array, text, delay) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(function() {
      let element = document.createElement('div');
      element.innerText = `${text[i]} ${array[i]}`;
      document.body.appendChild(element);
    }, i * delay);
  }
}

textString(emoji, text, 3000);


/* (4) Напишите функцию, которая вызывается и работает следующим образом:

console.log( multi(2)(3)(4) ); // 24 */

 // way 1

 function multi(a){
  return function(b){
    return function(c){
      return a * b * c;
    }
  }
}

console.log(multi(2)(3)(4));

// way 2
/*
let value = 1;
const multi = (n) => {
if (n) {
    value *= n;
    return multi;
 }
}

console.log(multi(1)(2)(3)(4));
console.log(value);

*/
