'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;

populationElements.forEach((element) => {
  const population = Number(element.textContent.replace(/,/g, ''));

  totalPopulation += population;
});

const averagePopulation = totalPopulation / populationElements.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(averagePopulation).toLocaleString('en-US');
