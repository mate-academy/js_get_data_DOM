'use strict';

const bodyElement = document.body;
const spanElement = bodyElement.querySelectorAll('.population');
let total = 0;
const arrayOfPopulation = [];

for (const span of spanElement) {
  const temp = span.innerHTML.split(',').join('');

  total += +temp;
  arrayOfPopulation.push(temp);
};

const totalResult = new Intl.NumberFormat().format(total);
const averageResult = new Intl.NumberFormat()
  .format(total / arrayOfPopulation.length);

const textTotalPopulation = document.querySelector('.total-population');
const textAveragePopulation = document.querySelector('.average-population');

textTotalPopulation.textContent = totalResult;
textAveragePopulation.textContent = averageResult;
