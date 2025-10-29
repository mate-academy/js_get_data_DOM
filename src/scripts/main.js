'use strict';

const colection = document.querySelectorAll('.population');
const totalCalc = document.querySelector('.total-population');
const averageCalc = document.querySelector('.average-population');
const numbers = [];

function addComa(num) {
  const numStr = String(num);
  const numbersStr = numStr.split('');
  const modify = [];
  const count = Math.floor(numbersStr.length / 3);

  for (let i = 3; i <= count * 3; i += 3) {
    modify.unshift(`,${numbersStr.splice(-3, 3).join('')}`);
  }

  if (numStr.length % 3 === 0) {
    return modify.join('').replace(',', '');
  }
  modify.unshift(`${numbersStr.splice(0).join('')}`);

  return modify.join('');
}

colection.forEach((el) => {
  const text = el.textContent;
  const number = +text.replaceAll(/[^0-9]+/g, '');

  numbers.push(number);
});

const total = numbers.reduce((acc, num) => acc + num, 0);
const average = Math.round(total / numbers.length);

const strTotal = addComa(total);
const strAverage = addComa(average);

totalCalc.textContent = strTotal;
averageCalc.textContent = strAverage;
