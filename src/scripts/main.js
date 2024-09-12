'use strict';

let totalPopulation = 0;

const population = document.querySelectorAll('.population');

population.forEach(country => {
  const normalizeNimber = +country.innerText.split(',').join('')
  totalPopulation += normalizeNimber;
});

const populationHtml = document.querySelector('.total-population');
const avarageHtml = document.querySelector('.average-population');


populationHtml.innerText = totalPopulation.toLocaleString('en-US');
avarageHtml.innerText = (totalPopulation / 10).toLocaleString('en-US');