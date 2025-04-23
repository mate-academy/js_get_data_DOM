'use strict';

const populations = [...(document.querySelectorAll('.population') || [])];
const totalPopulationNode = document.querySelector('.total-population');
const averagePopulationNode = document.querySelector('.average-population');

const totalPopulation = populations.reduce((acc, curr) => {
  return acc + +curr.textContent.replaceAll(',', '');
}, 0);
const averagePopulation = totalPopulation / populations.length;
const formatted = new Intl.NumberFormat('en');

totalPopulationNode.textContent = formatted.format(totalPopulation);
averagePopulationNode.textContent = formatted.format(averagePopulation);
