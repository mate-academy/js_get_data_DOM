'use strict';

const spa = document.querySelectorAll('span.population');
const strings = [...spa].map(one => one.textContent);
const number = strings.map(el => {
  return Number(el.split(',').join(''));
}
);

const resultTotal = number.reduce((a, b) => a + b);
const resultAverage = resultTotal / strings.length;

const total = document.querySelector('.total-population');

total.innerHTML = resultTotal.toLocaleString('en-US');

const average = document.querySelector('.average-population');

average.innerHTML = Math.floor(resultAverage).toLocaleString('en-US');
