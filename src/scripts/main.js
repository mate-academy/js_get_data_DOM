'use strict';

const populations = [...document.querySelectorAll('.population')];
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');
const totalPopulation = populations.reduce(
  (acc, el) => acc + +el.innerText.replace(/,/g, ''),
  0,
);
const averagePopulation = totalPopulation / populations.length;

totalPopulationSpan.innerText = totalPopulation.toLocaleString();
averagePopulationSpan.innerText = averagePopulation.toLocaleString();
