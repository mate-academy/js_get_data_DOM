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

function convertOutput(parameter) {
  return String(parameter).split('').reverse()
    .map((unit, index) => index % 3 === 0 && index !== 0 ? unit + ',' : unit)
    .reverse().join('');
}

reference.total.innerHTML = convertOutput(totalPopulation);
reference.average.innerHTML = convertOutput(averagePopulation);
