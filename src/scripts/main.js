'use strict';

let totalPopulation = 0;
let averagePopulation = 0;
const populationList = document.querySelectorAll('.population');

populationList.forEach((el) => {
  const population = Number(el.textContent.replace(/,/g, ''));

  if (!isNaN(population)) {
    totalPopulation += population;
  }
});

averagePopulation = Math.round(totalPopulation / populationList.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
