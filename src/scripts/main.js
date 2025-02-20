'use strict';

// write your code here
const populationArray = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');
let totalPopulation = 0;

populationArray.forEach((item) => {
  const population = +item.textContent.replaceAll(',', '');

  totalPopulation += population;
});

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

averagePopulationElement.textContent = (
  totalPopulation / populationArray.length
).toLocaleString('en-US');
