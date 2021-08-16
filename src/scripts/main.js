'use strict';

function thousandSeparator(number) {
  let value = number;
  let valueFormatted = '';

  while (value > 0) {
    valueFormatted = value % 1000 + ',' + valueFormatted;
    value = Math.trunc(value / 1000);
  }

  return valueFormatted.slice(0, -1);
}

const allPopulation = document.querySelectorAll('.population');

const population = [...allPopulation].map(
  item => +item.textContent.split(',').join('')
);

const totalValue = population.reduce((sum, x) => sum + x, 0);
const averageValue = totalValue / population.length;

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.textContent = thousandSeparator(averageValue);
totalPopulation.textContent = thousandSeparator(totalValue);
