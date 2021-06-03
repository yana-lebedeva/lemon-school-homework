/* Создайте структуру данных, полностью описывающую html-разметку картинки. 
С помощью методов браузера добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.
<img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" alt="" style="border: 1px solid #ccc" width="200" /> */

var img = {
  src: 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
  alt: '',
  style: 'border: "1px solid #ccc"',
  width: '200'
};

var element = document.createElement('img');
element.setAttribute('src', img.src);
element.setAttribute('alt', img.alt);
element.setAttribute('style', img.style);
element.setAttribute('width',img.width )

document.body.append(element);

/* Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней. 
Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates. */

var date = new Date();

var dates = {
  firstDate: date.setDate(date.getDay() - 2),
  secondDate: date.setDate(date.getDay() - 365)
}

var dateInput = (prompt('Введите дату в формате "yyyy-MM-dd"'));
dateInput = Number(new Date(dateInput));
 
if (dateInput > dates.secondDate && dateInput < dates.firstDate) {
  alert('Введённая вами дата попадает в диапазон');
} else {
  alert('Введённая вами дата не попадает в диапазон');
}

/* Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. 
Запустите цикл, в котором через prompt запрашивается имя свойства. 
С помощью оператора in или typeof проверьте наличие в объекте этого свойства, и выведите его на экран. 
Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt. 
Выйти из цикла и закончить проверки можно с помощью клавиши Cancel окна prompt. */

var person = {
  lastName: 'Yana',
  firstName: 'Lebedeva',
  age: 24,
  sex: 'female',
  height: 158,
  job: 'Google',
};

while (true) {
  var propertyName = prompt('Введите имя свойства, которое вас интересует')
  if (propertyName === null) {
    break;
  }

  if (propertyName in person) {
    alert(person[propertyName]);
  } else {
    person[propertyName] = prompt('Введите значение для этого свойства');
  }
}

console.log(person);

/* Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. 
В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) 
свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. 
Какое значение будет у добавленного свойства - тоже берется из prompt. 
При нажатии на Отмена при появлении prompt редактирование person заканчивается. 
И обновленные данные распечатываются в консоли. */

person.phone = '';

while (true) {
  var property = prompt('Введите свойство');

  if (property === null) {
    alert('Вы завершили действие')
    break;
  }

  if (property in person) {
    var act = prompt('Напишите что вы хотите сделать (delete либо update)');

    if (act === 'delete') {
      delete person[property];
      alert(`Вы удалили свойство ${property}`)
    } else if (act === 'update'){
      let value =  prompt('Введите ваши изменение');
      alert(`Вы изменили свойство ${property} на ${value}`);
      person[property] = value;
    } else {
      alert('Неверное действие');
    }

  } else {
    alert('В вашем объекте нет такого свойства');
  }
}

console.log(person);

/* Динамически (скриптом) создайте HTML элемент <dl>. 
Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства 
и dd - для значения свойства (работа с DOM - с использованием методов Native JS). */

var listNode = document.createElement('dl');
document.body.appendChild(listNode);

for (var key in person) {
  console.log(person[key]);

  var titleNode = document.createElement('dt');
  listNode.appendChild(titleNode);
  titleNode.innerText = key;

  var definitionNode = document.createElement('dd');
  listNode.appendChild(definitionNode);
  definitionNode.innerText = person[key];
}

/* Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
прочитанными из prompt (например: brand, model, resolution, color...). Добавьте этот гаджет персоне, созданной ранее. 
После этого создайте независимую копию объекта person, не используя встроенный метод Object.assign и JSON.parse, 
а то есть перебором свойств. */

var gadgetInput = {};

while (true) {
  var propertyName =prompt('Введите свойство');
  if (propertyName === null) {
    break;
  }
 
 gadgetInput[propertyName] = prompt('Введите значение для этого свойства');
}

person.phone = gadgetInput;

var personClone = {};

for (var key in person) {
  personClone[key] = person[key];
}

console.log(personClone);


/* С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с именем gadget. 
Добавьте поля объекта gadget в созданный ранее список <dl> */

let {phone: gadget} = person;

for (var key in gadgetInput) {
  console.log(gadgetInput[key]);

  var gadgetElement = document.createElement('dt');
  listNode.appendChild(gadgetElement);
  gadgetElement.innerText = key;

  var valueElement = document.createElement('dd');
  gadgetElement.appendChild(valueElement);
  valueElement.innerText = gadgetInput[key];
}
