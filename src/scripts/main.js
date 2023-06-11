'use strict';

const population = [...document.querySelectorAll('.population')];
const totalPopulationLine = document.querySelector('.total-population');
const averagePopulationLine = document.querySelector('.average-population');

const totalValue = population.reduce((acc, rec) => {
  return acc + (+rec.innerText.split(',').join(''));
}, 0);
const averageValue = totalValue / population.length;

totalPopulationLine.textContent = totalValue.toLocaleString('en-US');
averagePopulationLine.textContent = averageValue.toLocaleString('en-US');
