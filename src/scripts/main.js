'use strict';

// write your code here
const populationItem = document.querySelectorAll('.population');

const populationNumbers = [];

for (const item of populationItem) {
  populationNumbers.push(+item.innerHTML.replace(/,/g, ''));
}

const totalPopulation = populationNumbers.reduce((countryA, countryB) => {
  return countryA + countryB;
}, 0);

const averageValue = totalPopulation / populationNumbers.length;

document.querySelector('.total-population')
  .innerHTML = totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerHTML = averageValue.toLocaleString('en-US');
