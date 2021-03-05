'use strict';

const allPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelectorAll('.total-population');
const averagePopulation = document.querySelectorAll('.average-population');

const populationSum = [...allPopulation].reduce(
  (sum, value) =>
    sum + (+value.innerText.replaceAll(',', '')), 0
);

const averageSum = populationSum / allPopulation.length;

totalPopulation.innerText = populationSum;

averagePopulation.innerText = averageSum;
