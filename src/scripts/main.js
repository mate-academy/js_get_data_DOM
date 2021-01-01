'use strict';

const list = document.querySelectorAll('span.population');
const listPopulation = [...list].map(item => +item.innerText.replace(/,/g, ''));

const totalPopulation = listPopulation.reduce((sum, item) => sum + item, 0);
const averagePopulation = totalPopulation / listPopulation.length;

document.querySelector('span.total-population')
  .textContent = totalPopulation.toLocaleString();

document.querySelector('span.average-population')
  .textContent = averagePopulation.toLocaleString();
