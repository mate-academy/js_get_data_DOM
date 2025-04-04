'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(a => Number(a.innerText.replace(/,/g, '')));
const totalPopulation = populations.reduce((a, c) => a + c);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population')
  .innerHTML = totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerHTML = averagePopulation.toLocaleString('en-US');
