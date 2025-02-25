'use strict';

const population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let totalCount = 0;
let validCount = 0;

for (let i = 0; i < population.length; i++) {
  const text = population[i].innerText.trim().replace(/,/g, '');
  const number = Number(text);

  if (!isNaN(number) && number > 0) {
    totalCount += +number;
    validCount++;
  }
}

const average = validCount > 0 ? totalCount / population.length : 0;

totalPopulation.innerHTML = totalCount.toLocaleString('en-US');
averagePopulation.innerHTML = Math.round(average).toLocaleString('en-US');
