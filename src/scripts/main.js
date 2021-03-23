'use strict';

const populations = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = populations.map(item => {
  return +item.textContent.replace(/,/g, '');
}).reduce((whole, item) => (whole + item), 0);

const averagePopulation = totalPopulation / populations.length;

total.textContent = totalPopulation.toLocaleString('en-US');
average.textContent = averagePopulation.toLocaleString('en-US');
