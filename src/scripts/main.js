'use strict';

const populations = document.querySelectorAll('.population');
const arrayOfPopulation = [...populations].map(item =>
  +item.innerText.split(',').join(''));

const sumPopulations = arrayOfPopulation.reduce((a, b) => a + b, 0);
const averagePopulations = sumPopulations / arrayOfPopulation.length;

function separator(number) {
  const res = String(number);
  let str = '';
  let count = 0;

  for (let i = res.length - 1; i >= 0; i--) {
    str += res[i];

    count++;

    if (count % 3 === 0 & i !== 0) {
      str += ',';
    }
  };

  return str.split('').reverse().join('');
};

const resultSumPopulations = separator(sumPopulations);
const resultAveragePopulations = separator(averagePopulations);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = resultSumPopulations;
averagePopulation.textContent = resultAveragePopulations;
