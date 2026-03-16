'use strict';

const populations = document.querySelectorAll('.population');
const numbers = [];

populations.forEach((pop) => {
  const clean = pop.textContent.replace(/,/g, '');
  const number = Number(clean);

  if (!isNaN(number)) {
    numbers.push(number);
  }
});

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = total / numbers.length;

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

averageElement.textContent = average.toLocaleString();
totalElement.textContent = total.toLocaleString();
