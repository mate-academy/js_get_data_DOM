'use strict';

const population = document.body.querySelectorAll('span.population');

const numbers = [...population].map(item => +item.innerHTML
  .split(',').join(''));

const total = numbers.reduce((a, b) => a + b).toLocaleString('en-US');

const average = (numbers.reduce((a, b) => a + b) / numbers.length)
  .toLocaleString('en-US');

document.querySelector('span.total-population').innerHTML = total;
document.querySelector('span.average-population').innerHTML = average;
