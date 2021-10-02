'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationsCalc = [...populations]
  .map(x => x.innerText)
  .map(x => +x.replace(/,/g, ''))
  .reduce((a, b) => a + b);
const averagePopulationCalc = populationsCalc / [...populations].length;

const populationsCalcArr = String(populationsCalc).split('');
const averagePopulationCalcArr = String(averagePopulationCalc).split('');

for (let i = populationsCalcArr.length - 3; i > 0; i = i - 3) {
  populationsCalcArr.splice(i, 0, ',');
};

for (let i = averagePopulationCalcArr.length - 3; i > 0; i = i - 3) {
  averagePopulationCalcArr.splice(i, 0, ',');
};

totalPopulation.innerText = (`${populationsCalcArr.join('')}`);
averagePopulation.innerText = (`${averagePopulationCalcArr.join('')}`);
