/* Переменная lang может принимать два значения: 'ru' и 'en'. 
Переменная day принимает значение от 0 до 6-ти. 
Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке
в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). 
Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском. */

var lang = prompt('Выберите язык');
var day = new Date().getDay();
var result;

switch(lang.toLowerCase()) {

  case 'ru': 
    if (day === 0) {
      result = alert('Сегодня воскресение');
    } else if (day === 1) {
      result = alert('Сегодня понедельник');
    } else if (day === 2) {
      result = alert('Сегодня вторник');
    } else if (day === 3) {
      result = alert('Сегодня среда');
    } else if (day === 4) {
      result = alert ('Сегодня четверг');
    } else if (day === 5) {
      result = alert('Сегодня пятница');
    } else if (day === 6) {
      result = alert('Сегодня суббота')
    }
    break;

  case 'en': 
    if (day === 0) {
      result = alert('Today is Sunday');
    } else if (day === 1) {
      result = alert('Today is Monday');
    } else if (day === 2) {
      result = alert('Today is Tuesday');
    } else if (day === 3) {
      result = alert('Today is Wednesday');
    } else if (day === 4) {
      result = alert ('Today is Thursday');
    } else if (day === 5) {
      result = alert('Today is Friday');
    } else if (day === 6) {
      result = alert('Today is Saturday')
    }
   break;
}
