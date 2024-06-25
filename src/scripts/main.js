'use strict';

const population = [...document.querySelectorAll('[class="population"]')];
let totalPopulation = 0;

for (const country of population) {
  totalPopulation += Number(country.innerHTML.split(',').join(''));
}

document.querySelector('[class="total-population"]').innerHTML =
  totalPopulation.toLocaleString('En-US');

document.querySelector('[class="average-population"]').innerHTML = (
  totalPopulation / population.length
).toLocaleString('En-US');
