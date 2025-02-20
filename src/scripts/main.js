'use strict';

const population = [...document.querySelectorAll('.population')];

const totalPopulation = population.reduce(
  (acc, elem) => acc + Number(elem.innerHTML.replaceAll(',', '')),
  0,
);

document.querySelector('.total-population').innerHTML =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML = Math.trunc(
  totalPopulation / population.length,
).toLocaleString('en-US');
