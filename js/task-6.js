'use strict';

let total = 0;
let number;
do{
    number = prompt("Введіть число");
    if (Number.isNaN(Number(number))){
        alert('Було написано не число, спробуйте ще раз');
        continue
    }
    total += Number(number);
} while (number !== null);

alert(`Загальна сума чисел дорівнює ${total}`);
