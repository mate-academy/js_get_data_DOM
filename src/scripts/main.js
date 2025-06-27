'use strict';

const population = [...document.querySelectorAll('.population')];
const populationTotal = [];

for (const ch of population) {
  const sum = Number(ch.textContent.replace(/,/g, ''));

  populationTotal.push(sum);
}

const result = populationTotal.reduce((acc, val) => acc + val, 0);
const average = result / populationTotal.length;

const formattedResult = result.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = formattedResult;
averagePopulation.textContent = formattedAverage;
