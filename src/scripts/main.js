'use strict';

const population = [...document.body.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let sum = 0;

for (const item of population) {
  const content = item.innerHTML.replaceAll(',', '');

  sum += Number(content);
}

const average = sum / population.length;

totalPopulation.innerHTML = sum.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
