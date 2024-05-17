'use strict';

const populationsElement = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');
let total = 0;

populationsElement.forEach((population) => {
  total += Number(population.textContent.replace(/,/g, ''));
});

totalElement.textContent = total.toLocaleString('en-US');

averageElement.textContent = (total / populationsElement.length).toLocaleString(
  'en-US',
);
