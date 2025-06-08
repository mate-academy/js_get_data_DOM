'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const total = populations.reduce((sum, value) => sum + value, 0);
const average = total / populations.length;

const formatter = new Intl.NumberFormat('en-US');

const formattedTotal = formatter.format(total);
const formattedAverage = formatter.format(Math.round(average));

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
