'use strict';

const populationElements = document.querySelectorAll('.population');

const numbers = [...populationElements].map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const total = numbers.reduce((sum, num) => sum + num, 0);

const average = total / numbers.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString();
