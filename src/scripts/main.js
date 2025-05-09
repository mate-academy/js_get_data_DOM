'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map((el) => parseInt(el.textContent.replace(/,/g, ''), 10))
  .filter((num) => !isNaN(num)); // Перевірка, чи це дійсні числа

const total = populations.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / populations.length);

const formattedTotal = total.toLocaleString();
const formattedAverage = average.toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
