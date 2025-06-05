'use strict';

let sum = 0;

const population = document.querySelectorAll('.population');

population.forEach((span) => {
  sum += parseFloat(span.textContent.replace(/,/g, ''));
});

const list = document.querySelector('.list');
const items = list.querySelectorAll('li');

const average = sum / items.length;

document.querySelector('.total-population').textContent =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
