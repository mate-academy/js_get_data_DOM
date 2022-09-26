'use strict';

const populations = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationNumbers = populations
  .map(country => +country.innerHTML.split(',').join(''));
const populationTotal = populationNumbers
  .reduce((acc, curr) => acc + curr, 0);
const populationAverage = populationTotal / populationNumbers.length;

totalPopulation.innerText = separate(populationTotal);
averagePopulation.innerText = separate(populationAverage);

function separate(number) {
  return number.toLocaleString('en');
}
