/* В переменной month хранится текущий месяц (new Date()). 
Определите в какую пору года попадает Сейчаст месяц (зима, лето, весна, осень). */

// way 1

var month = new Date().getMonth() + 1;
if (month >= 3 && month < 6) {
  alert('Сейчас весна');
} else if (month >= 6 && month < 9) {
  alert('Сейчас лето');
} else if (month >= 9 && month < 12) {
  alert('Сейчас осень');
} else if ((month >= 1 && month < 3) || month === 12) {
  alert('Сейчас зима');
}

// way 2

 /*var month = new Date();
switch(month.getMonth() + 1) {
  case 1: alert('Январь. Сейчас зима'); break;
  case 2: alert('Февфаль. Сейчас зима'); break;
  case 3: alert('Март. Сейчас весна'); break;
  case 4: alert('Апрель. Сейчас весна'); break;
  case 5: alert('Май. Сейчас весна'); break;
  case 6: alert('Июнь. Сейчас лето'); break;
  case 7: alert('Июль. Сейчас лето'); break;
  case 8: alert('Август. Сейчас лето'); break;
  case 9: alert('Сентябрь. Сейчас осень'); break;
  case 10: alert('Октябрь. Сейчас осень'); break;
  case 11: alert('Ноябрь. Сейчас осень'); break;
  case 12: alert('Декабрь. Сейчас зима'); break;
} */
