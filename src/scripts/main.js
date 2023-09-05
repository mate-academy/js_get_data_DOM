'use strict';

const populationValuesArr = [...document.querySelectorAll('.population')]
  .map((span) => {
    return parseInt(span.textContent.split(',').join(''));
  });

const totalPopulation = populationValuesArr.reduce((acc, val) => {
  return acc + val;
}, 0);

const average = totalPopulation / populationValuesArr.length;

const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

totalPopulationEl.innerHTML = totalPopulation.toLocaleString();
averagePopulationEl.innerHTML = average.toLocaleString();
