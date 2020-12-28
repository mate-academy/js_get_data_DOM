'use strict';

const spansNestigPopulation = document.querySelectorAll('.population');

const populations = [...spansNestigPopulation].map(span => {
  return +span.innerText.split(',').join('');
});

const totalPopulation = populations.reduce((acc, curV) => acc + curV, 0);

const averagePopulation = totalPopulation / populations.length;

const totalPopulationSpan = document.querySelector('.total-population');

totalPopulationSpan.innerText = totalPopulation.toLocaleString();

const averagePopulationSpan = document.querySelector('.average-population');

averagePopulationSpan.innerText = averagePopulation.toLocaleString();
