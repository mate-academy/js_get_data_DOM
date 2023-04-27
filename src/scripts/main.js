'use strict';

const items = document.querySelectorAll('.population');

const population = [...items]
  .map(item => Number(item.innerText.split(',').join('')));

const totalPopulation = population.reduce((sum, elem) => sum + elem, 0);

const averagePopulation = totalPopulation / population.length;

const thousandsSeparator = (number) => {
  return number.toLocaleString('en-US');
};

document.querySelector('.total-population').textContent
  = thousandsSeparator(totalPopulation);

document.querySelector('.average-population').textContent
  = thousandsSeparator(averagePopulation);
