/* У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. 
В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать английский язык или выпить пива. 
С помощью условного оператора определите ваши возможности и отобразите на экране в alert. */

 alert('Занятия по английскому на Мльте стоят 10 053 грн за одну неделю');
 alert('Номер в 3* гостинице за 7 ночей 6 650 грн');
 alert('Перелёт туда и обратно 12 000 грн');
 alert('Другие рассходы 33 510');
 alert('Средняя стоимость полёта на Мальту, для изучения английского, на одну неделю 62 213 грн на одного человека(124 426 грн на двоих)')

 var requiredAmount = 124426;
 var monthlyAmount = 224852 * 2;
 var myWallet = parseInt(prompt('Введите сколько у вас делег в гривнах'));
 var friendWallet = parseInt(prompt('Введите сколько денег у друга в гривнах'));

 var totalAmount = friendWallet + friendWallet;
 alert('Ваша общая сумма: ' + totalAmount);
 if (totalAmount < requiredAmount) {
  alert('Сори ребят, вы идёте пить пиво');
 } else if (totalAmount > monthlyAmount) {
  alert('Супер! Вы можете поехать на Мальту аж на целый месяц')
 } else {
   alert('Ваших денег достаточно, что бы поехать на Мальту и изучать английский, но только одну неделю')
 }
 