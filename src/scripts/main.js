'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;
let count = 0;

populationElements.forEach((element) => {
  const population = parseInt(element.textContent.replace(/,/g, ''), 10);

  if (!isNaN(population)) {
    totalPopulation += population;
    count++;
  }
});

const averagePopulation = totalPopulation / count;

const formatNumber = (num) => num.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(averagePopulation),
);
