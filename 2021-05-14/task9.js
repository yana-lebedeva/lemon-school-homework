/* У Чжуан-цзы было N яблок, Цзэн-Цзы съел несколько. 
Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает.
Запишите повествование в переменных и выражениях, читая значения из prompt.
Не используя операторы сравнения, покажите, правду говорит Цзэн-Цзы или ложь. */

var thereWereApples = +prompt('Введите коллическво всех яблок которые были');
var eatenApples = +prompt('Введите сколько яблок было съедено');
var howMuchIsLeft = alert(`Всего осталось ${thereWereApples - eatenApples}`);

alert(`Цзэн-Цзы говорит: ${Boolean(thereWereApples - eatenApples)}`);