'use strict';

const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const populationArr = [...population].map((element) =>
  +element.innerText.split(',').join(''));

const populationTotal = populationArr.reduce((sum, current) => sum + current);
const averageResult = populationTotal / population.length;

const formattedAverage = averageResult.toLocaleString('en-US');
const formattedTotal = populationTotal.toLocaleString('en-US');

averagePopulation.innerText = formattedAverage;
totalPopulation.innerText = formattedTotal;
