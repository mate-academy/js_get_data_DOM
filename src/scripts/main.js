'use strict';

const populationElems = document.querySelectorAll('.population');
const totalPopulationElem = document.querySelector('.total-population');
const averagePopulationElem = document.querySelector('.average-population');

let totalPopulation = 0;

populationElems.forEach((element) => {
  const population = parseInt(element.textContent.replace(/,/g, ''));

  totalPopulation += population;
});

const averagePopulation = Math.round(totalPopulation / populationElems.length);

totalPopulationElem.textContent = totalPopulation.toLocaleString();
averagePopulationElem.textContent = averagePopulation.toLocaleString();
