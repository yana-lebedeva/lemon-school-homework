/* Напишите калькулятор обмена валюты USD-UAH. 
Из первого prompt читается тип операции (регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. 
Используя switch, рассчитайте результат конвертации. Результат выведите его в alert. */

const course = 27.46
var operaType = prompt('Вветите тип операции');
var amountToBeConverted = parseInt(prompt('Введите сумму, которую вы хотите конвентировать'))
switch (operaType.toLowerCase()) {
  case 'usd': alert(amountToBeConverted * course); break;
  case 'uah': alert(amountToBeConverted / course); break;
}
