'use strict';

class ThousandsSeparator {
  separate(number) {
    const stringNumber = String(number);
    let digit = '';
    let count = 0;

    for (let i = stringNumber.length - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        digit = ',' + digit;
        count = 0;
      } else {
        digit = stringNumber[i] + digit;
        count++;
      }
    }

    return digit;
  }
}

const population = document.querySelectorAll('span.population');
const numbers = [];

for (const el of population) {
  numbers.push(el.innerHTML);
}

const total = numbers.reduce((sum, current) => {
  const currentNumber = +current.split(',').join('');

  return sum + currentNumber;
}, 0);

const average = total / numbers.length;

document.querySelector('.total-population').innerHTML
  = new ThousandsSeparator().separate(total);

document.querySelector('.average-population').innerHTML
  = new ThousandsSeparator().separate(average);
