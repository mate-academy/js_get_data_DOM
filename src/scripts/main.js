'use strict';

// write your code here
const populationSpans = document.querySelectorAll('.population');
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

let totalPopulation = 0;

populationSpans.forEach((span) => {
  totalPopulation += parseInt(span.textContent.replace(/,/g, ''));
});

const averagePopulation = Math.round(totalPopulation / populationSpans.length);

totalPopulationSpan.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationSpan.textContent = averagePopulation.toLocaleString('en-US');
