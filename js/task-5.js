'use strict';

const country = prompt('Введіть назву країни');
let cost;

switch (country.toLowerCase()) {
    
  case 'китай':
    cost = 100;
    break;

  case 'чилі':
    cost = 250;
    break;

  case 'австралія':
    cost = 170;
    break;

  case 'індія':
        cost = 80;
        break;

   case 'ямайка':
    cost = 120;
    break;

    default : {
     alert('У вашій країні доставка недоступна')
    }
} 
console.log(`Ви обрали ${country},вартість доставки буде коштувати - ${cost} кредитів`)