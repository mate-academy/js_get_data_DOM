'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')].map(
  (el) => el.textContent,
);

function totalSumOfPopulation(piople) {
  let totalSumPopulation = 0;

  piople.map((el) => {
    totalSumPopulation += Number(el.replace(/,/g, ''));
  });

  return totalSumPopulation;
}

function getAvaragePopulation(piople, total) {
  return Math.floor(total / piople.length);
}

const totalSum = totalSumOfPopulation(population);

document.querySelector('.total-population').textContent =
  totalSum.toLocaleString('en-US');

const avarageSum = getAvaragePopulation(population, totalSum);

document.querySelector('.average-population').textContent =
  avarageSum.toLocaleString('en-US');
getAvaragePopulation(population, totalSumOfPopulation);
