'use strict';

const reference = {
  population: document.querySelectorAll('.population'),
  total: document.querySelector('.total-population'),
  average: document.querySelector('.average-population'),
};

const populationInfo = Array.from(reference.population);
const withoutCommas = populationInfo.map(
  value => +value.textContent.replace(/[,]/g, '')
);
const totalPopulation = withoutCommas.reduce(
  (accumulator, quantity) => accumulator + quantity, 0
);
const averagePopulation = totalPopulation / populationInfo.length;

reference.total.innerText = totalPopulation.toLocaleString();
reference.average.innerText = averagePopulation.toLocaleString();
