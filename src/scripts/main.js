'use strict';

const allPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationSum = [...allPopulation].reduce(
  (sum, value) =>
    sum + (+value.innerText.replaceAll(',', '')), 0
);

const averageSum = populationSum / allPopulation.length;

totalPopulation.innerText = populationSum.toLocaleString('en');

averagePopulation.innerText = averageSum.toLocaleString('en');
