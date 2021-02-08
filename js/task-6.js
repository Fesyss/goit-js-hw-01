'use strict';

let total = 0;
let number

do{
    number = prompt("Введіть число");
    if (isNaN(number)){
        alert('Було написано не число, спробуйте ще раз');
        continue
    }
    total += Number(number);
}while (number != null );

total = total;
alert(`Загальна сума чисел дорівнює ${total}`);