/*  (1) Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert. */

let array = [10, 11, 26, 45, 'abc', 's', '1', '32'];

let sum = 0;
for (let i = 0; i < array.length; i++) {
  let value = +array[i];
  if (!isNaN(value)) {
    sum += value;
  }
}
alert(sum);

/* (2) Создайте массив из минимум 100 случайных целых чисел. 
Переберите массив и сгенерируйте на его основе новый, который содержит только уникальные (неповторяющиеся) значения 
исходного массива. Решите задачу, используя только цикл for. */

let arr = [];

 for (let i = 0; i < 100; i++) {
   let random = Math.floor(Math.random() * 100);
   arr.push(random);
}

let arrayOfUnicoleNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arrayOfUnicoleNumbers.indexOf(arr[i]) === -1) {
    arrayOfUnicoleNumbers.push(arr[i]);
  }
}

console.log(arrayOfUnicoleNumbers);


/* (3) Создайте массив со значениями: ‘Angular’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами "Это здесь лишнее"  */

let libraries = ['Angular', 'jQuery'];
libraries.unshift('Backbone.js');
libraries.push('React.js', 'Vue.js');
libraries.splice(2, 0, 'CommonJS');
let deletedLibrary = libraries.splice(libraries.indexOf('jQuery'), 1);
alert(`Это здесь лишнее: ${deletedLibrary}`);



/* (4) Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’. 
Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). 
Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты. */

let str = 'Как Однажды Жак Звонарь Сломал Городской Фонарь';
let arrayStr = str.split(' ');
console.log(arrayStr);

arrayStr.splice(1, 1);
arrayStr.splice(3, 0, 'Однажды');
let string = arrayStr.join(' ');
alert(string);
