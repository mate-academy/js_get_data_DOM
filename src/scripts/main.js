'use strict';

const spanPopulation = document.querySelectorAll('.population');
const totalValue = document.querySelector('.total-population');
const averageValue = document.querySelector('.average-population');

const totalPopulation = [...spanPopulation]
  .map(el => Number(el.innerText.split(',').join('')))
  .reduce((sum, elem) => sum + elem, 0);

const averagePopulation = totalPopulation / spanPopulation.length;

totalValue.innerText = totalPopulation.toLocaleString('en-US');
averageValue.innerText = averagePopulation.toLocaleString('en-US');
