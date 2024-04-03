'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const numbers = [...population].map((i) => {
  return +i.textContent.split(',').join('');
});

const sum = numbers.reduce((acc, cur) => acc + cur);
const avg = sum / numbers.length;

total.textContent = sum.toLocaleString('en-US');
average.textContent = avg.toLocaleString('en-US');
