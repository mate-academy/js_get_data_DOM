'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

function splitNumber(number) {
  const reversedNumber = number.split('').reverse();
  let result = '';

  for (let i = 0; i < reversedNumber.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result = reversedNumber[i] + ',' + result;
    } else {
      result = reversedNumber[i] + result;
    }
  }

  return result;
}

const numbers = [...population].map((i) => {
  return +i.textContent.split(',').join('');
});

const sum = String(numbers.reduce((acc, cur) => acc + cur));
const avg = String(sum / numbers.length);

total.textContent = splitNumber(sum);
average.textContent = splitNumber(avg);
