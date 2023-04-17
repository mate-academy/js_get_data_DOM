'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let count = 0;

for (const population of populations) {
  count += Number(population.innerText.split(',').join(''));
}

const average = count /populations.length;

totalPopulation.textContent = count.toLocaleString();
averagePopulation.textContent = average.toLocaleString();


