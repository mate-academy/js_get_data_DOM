'use strict';

const takePopulation = document.querySelectorAll('.population');

const totalPopulation = [...takePopulation]
  .map(el => +(el.innerText.replace(/,/g, '')))
  .reduce((sum, b) => sum + b);

const averagePopulation = totalPopulation / takePopulation.length;

document.querySelector('.total-population')
  .innerText = totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerText = averagePopulation.toLocaleString('en-US');
