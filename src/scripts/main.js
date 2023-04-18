'use strict';

const populations = document.querySelectorAll('.population');

const arrayOfPopulations = [...populations].map(
  population => +population.textContent.split(',').join(''));

const totalPopulation = arrayOfPopulations.reduce(
  (acc, population) => acc + population, 0);
const totalNumOfPopulation = document.querySelector('.total-population');

totalNumOfPopulation.textContent = formatNumber(totalPopulation);

const averagePopulation = document.querySelector('.average-population');
const averageNumOfPopulation = totalPopulation / arrayOfPopulations.length;

averagePopulation.textContent = formatNumber(averageNumOfPopulation);

function formatNumber(num) {
  const reversedNum = String(num).split('').reverse();
  let count = 0;
  let formattedNum = '';

  for (let i = 0; i < reversedNum.length; i++) {
    if (count > 2) {
      formattedNum += ',';
      count = 0;
    }

    formattedNum += reversedNum[i];
    count++;
  }

  return formattedNum.split('').reverse().join('');
}
