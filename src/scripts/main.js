'use strict';

const reference = {
  population: document.querySelectorAll('.population'),
  total: document.querySelector('.total-population'),
  average: document.querySelector('.average-population'),
};

const populationInfo = Array.from(reference.population);
const withoutCommas = populationInfo.map(
  a => +a.textContent.replace(/[,]/g, '')
);
const totalPopulation = withoutCommas.reduce(
  (accumulator, item) => accumulator + item, 0
);

const averagePopulation = totalPopulation / populationInfo.length;

function convertOutput(number) {
  return String(number).split('').reverse()
    .map((a, ind) => ind % 3 === 0 && ind !== 0 ? a + ',' : a)
    .reverse().join('');
}

reference.total.innerHTML = convertOutput(totalPopulation);
reference.average.innerHTML = convertOutput(averagePopulation);
