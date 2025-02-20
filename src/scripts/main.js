'use strict';

const population = [...document.querySelectorAll('.population')];
let totalPopulation = 0;

for (const country of population) {
  totalPopulation += Number(country.innerHTML.split(',').join(''));
}

document.querySelector('.total-population').innerHTML =
  totalPopulation.toLocaleString('En-US');

document.querySelector('.average-population').innerHTML = (
  totalPopulation / population.length
).toLocaleString('En-US');
