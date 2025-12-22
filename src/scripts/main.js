'use strict';

const populationSpans = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const arrayOfPopulationSpans = [...populationSpans];
const numbersOfPopulation = arrayOfPopulationSpans.map((el) => {
  const cleanString = el.textContent.replace(/,/g, '');

  if (!isNaN(cleanString)) {
    const number = +cleanString;

    return number;
  }

  return 0;
});
const sum = numbersOfPopulation.reduce((acc, num) => acc + num, 0);

total.textContent = sum.toLocaleString('en-US');

const averageSum = sum / numbersOfPopulation.length;

average.textContent = Math.round(averageSum).toLocaleString('en-US');
