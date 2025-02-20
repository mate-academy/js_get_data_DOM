'use strict';

const populationElem = document.body.querySelectorAll('.population');
const population = Array.from(populationElem).map((elem) => {
  return parseInt(elem.textContent.replace(',', ''), 10);
});
const total = population.reduce((accum, current) => accum + current);
const average = total / population.length;

const totalPopulation = document.body.querySelector('.total-population');
const averagePopulation = document.body.querySelector('.average-population');

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = Math.round(average);
