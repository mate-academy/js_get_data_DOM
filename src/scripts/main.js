'use strict';

const population = document.querySelectorAll('.population');

const totalPopulation = [...population]
  .map(item => Number(item.innerHTML.replace(/,/g, '')))
  .reduce((sum, a) => sum + a, 0);

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = totalPopulation.toLocaleString();
average.innerHTML = (totalPopulation / population.length).toLocaleString();
