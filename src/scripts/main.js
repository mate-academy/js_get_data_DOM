'use strict';

const arrStringsOfPopulation = document.querySelectorAll('.population');
const arrNumbersOfPopulation = [];

for (const sting of arrStringsOfPopulation) {
  const number = sting.textContent.trim().replace(/,/g, '');

  arrNumbersOfPopulation.push(number);
}

const numbers = arrNumbersOfPopulation.map((number) => {
  return typeof number === 'string' ? +number : number;
});

const totalPopulation = numbers.reduce(
  (prev, population) => prev + population,
  0,
);
const averagePopulation = totalPopulation / numbers.length;
const resOfCalcTotalPopulaction = document.querySelector('.total-population');
const resOfCalcAveragePopulaction = document.querySelector(
  '.average-population',
);

resOfCalcTotalPopulaction.innerHTML = totalPopulation.toLocaleString('en-US');

resOfCalcAveragePopulaction.innerHTML =
  averagePopulation.toLocaleString('en-US');
