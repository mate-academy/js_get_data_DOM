'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationsCalc = [...populations]
  .map(node => node.innerText)
  .map(populationsToNum => +populationsToNum.replace(/,/g, ''))
  .reduce((a, b) => a + b);
const averagePopulationCalc = populationsCalc / [...populations].length;

const stringWithSeparators = currentValue => {
  const populationsCalcToArray = currentValue.toString().split('');

  for (let i = populationsCalcToArray.length - 3; i > 0; i = i - 3) {
    populationsCalcToArray.splice(i, 0, ',');
  }

  return populationsCalcToArray.join('');
};

const populationsToString = stringWithSeparators(populationsCalc);
const averagePopulationToString = stringWithSeparators(averagePopulationCalc);

totalPopulation.innerText = (`${populationsToString}`);
averagePopulation.innerText = (`${averagePopulationToString}`);
