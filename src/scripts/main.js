'use strict';

const populationSpans = document.querySelectorAll('.population');

const totalPopulation = [...populationSpans]
  .reduce((sum, population) => {
    return sum + Number(population.innerText.replace(/,/g, ''));
  }, 0);

const averagePopulation = totalPopulation / populationSpans.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.innerText = totalPopulation.toLocaleString('en-US');
averageSpan.innerText = averagePopulation.toLocaleString('en-US');
