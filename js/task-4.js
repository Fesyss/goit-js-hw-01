'use strict';

let credits = 23580;
const pricePerDroid = 3000;
const number = prompt('Скільки дроїдів бажаєте купити? ')
const totalPrice = number * pricePerDroid;

if (totalPrice > credits){
    console.log('Недостатньо коштів на рахунку!')
} else if ( number === null){
    console.log('Скасовано користувачем!')
} else if ( Number.isNaN(Number(number)) === NaN ){
    console.log('Ви ввели не число!')
}else {
    console.log(`Ви купили ${number} дроїдів, на рахунку залишилося ${ credits - totalPrice} кредитів.`)
}
