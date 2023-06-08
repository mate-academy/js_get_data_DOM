'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;

for (const data of population) {
  const numericData = Number((data.innerHTML).replaceAll(',', ''));

  total += numericData;
}

const average = (total / population.length).toLocaleString();

total = total.toLocaleString();
totalPopulation.innerHTML = total;
averagePopulation.innerHTML = average;
