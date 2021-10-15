'use strict';

const countriesByPopulationList = [...document.querySelectorAll('.population')]
  .map(population => population.innerText)
  .filter(population => typeof parseInt(population) === 'number')
  .map(population => Number(population.split(',').join('')));
const totalPopulation = countriesByPopulationList
  .reduce((sum, population) => sum + population, 0);
const avaragePopulation = totalPopulation / countriesByPopulationList.length;

function getNumberWithThousandsSeparator(number) {
  const parts = number.toString().split('.').map(Number);
  let leftPart = parts[0];
  const rightPart = parts[1];

  leftPart = parts[0].toLocaleString();

  return rightPart ? [leftPart, rightPart].join('.') : leftPart;
}

const populationElement = document.querySelector('.total-population');
const avaragePopulationElement = document.querySelector('.average-population');

populationElement
  .textContent = getNumberWithThousandsSeparator(totalPopulation);

avaragePopulationElement
  .textContent = getNumberWithThousandsSeparator(avaragePopulation);
