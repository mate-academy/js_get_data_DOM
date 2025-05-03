'use strict';

const population = document.querySelectorAll('.population ');
const selectTotalPopulation = document.querySelector('.total-population');
const selectAveragePopulation = document.querySelector('.average-population');

let totalPopulation = 0;

population.forEach((element) => {
  totalPopulation += parseInt(element.textContent.replace(/,/g, ''));
});

const AveragePopulation = Math.round(totalPopulation / population.length);

selectTotalPopulation.textContent = totalPopulation.toLocaleString('en-US');

selectAveragePopulation.textContent = AveragePopulation.toLocaleString('en-US');
//  solution
