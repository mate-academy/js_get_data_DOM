'use strict';

const population = document.querySelectorAll('.population');

const numbers = [...population].map(
  country => Number(country.textContent.split(',').join(''))
);

const total = numbers.reduce((sum, current) => sum + current, 0);

const average = total / numbers.length;

document.querySelector('.total-population').textContent
  = total.toLocaleString('en-US');

document.querySelector('.average-population').textContent
  = average.toLocaleString('en-US');
