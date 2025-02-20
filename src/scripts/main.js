'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populations = document.getElementsByClassName('population');

let total = 0;
let average = 0;

for (let i = 0; i < populations.length; i++) {
  const population = Number(populations[i].textContent.replace(/,/g, ''));

  if (!isNaN(population)) {
    total += population;
  }
}

average = total / populations.length;

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
