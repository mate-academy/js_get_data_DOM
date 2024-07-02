'use strict';

const population = document.querySelectorAll('.population');

const populationValueArray = [];

population.forEach((country) => {
  populationValueArray.push(country.innerText);
});

const populationToNumber = populationValueArray.map(
  (country) => +country.replaceAll(',', ''),
);

const totalPopulation = populationToNumber.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = totalPopulation / populationToNumber.length;

document.querySelector('.total-population').textContent = totalPopulation
  .toString()
  .split('')
  .reverse()
  .map((num, index) => (index % 3 === 0 && index !== 0 ? `${num},` : num))
  .reverse()
  .join('');

document.querySelector('.average-population').textContent = averagePopulation
  .toString()
  .split('')
  .reverse()
  .map((num, index) => (index % 3 === 0 && index !== 0 ? `${num},` : num))
  .reverse()
  .join('');
