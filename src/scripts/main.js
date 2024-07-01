'use strict';

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const population = [...document.querySelectorAll('.population')];
const totalPopulation = population.reduce(
  (total, el) => total + Number(el.innerHTML.replaceAll(',', '')),
  0,
);
const averagePopulation = Math.round(totalPopulation / population.length);

totalSpan.innerHTML = totalPopulation.toLocaleString();
averageSpan.innerHTML = averagePopulation.toLocaleString();
