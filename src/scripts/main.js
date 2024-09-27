'use strict';

const populationsList = document.querySelectorAll('.population');
const populationValues = [...populationsList]
  .map(item => +item.textContent.split(',').join(''));

const sumOfPopulations = populationValues
  .reduce((sum, population) => sum + population, 0);

const averagePopulation = sumOfPopulations / populationValues.length;

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = addThousandsSeparator(sumOfPopulations);
averagePopulationElement.textContent = addThousandsSeparator(averagePopulation);

function addThousandsSeparator(number) {
  const currentNumber = `${number}`.split('');
  const changedNumber = [];
  let counter = 0;

  for (let i = currentNumber.length - 1; i >= 0; i--) {
    changedNumber.push(currentNumber[i]);
    counter++;

    if (counter % 3 === 0 && i !== 0) {
      changedNumber.push(',');
    }
  }

  return changedNumber.reverse().join('');
}
