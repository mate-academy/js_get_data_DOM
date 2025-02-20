'use strict';

const allPopulations = [...document.querySelectorAll('.population')].map(
  (el) => +el.textContent.replaceAll(',', ''),
);

const totalValue = allPopulations.reduce((acc, el) => acc + el, 0);
const averageValue = totalValue / allPopulations.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalValue.toLocaleString('en-US');
average.textContent = averageValue.toLocaleString('en-US');
