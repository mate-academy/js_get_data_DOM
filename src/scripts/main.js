'use strict';

const population = document.body.querySelectorAll('.population');
const populationText = [...population]
  .map(text => Number(text.textContent.split(',').join('')));

const totalPopulation = populationText.reduce((a, b) => a + b, 0);

const averagePopulation = totalPopulation / populationText.length;

const total = document.body.querySelector('.total-population');

total.textContent = totalPopulation.toLocaleString('en');

const average = document.body.querySelector('.average-population');

average.textContent = averagePopulation.toLocaleString('en');
