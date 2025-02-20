'use strict';

const populations = document.querySelectorAll('.list .population');
const totalPopulationNode = document.querySelector('.total-population');
const averagePopulationNode = document.querySelector('.average-population');

const totalPopulation = Array.from(populations).reduce((acc, next) => {
  let total = acc;

  const num = Number(next.textContent.replace(/,/g, ''));

  total += num;

  return total;
}, 0);

const averagePopulation = Math.round(totalPopulation / populations.length);

totalPopulationNode.textContent = totalPopulation.toLocaleString();
averagePopulationNode.textContent = averagePopulation.toLocaleString();
