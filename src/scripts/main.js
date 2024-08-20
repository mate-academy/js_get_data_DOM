'use strict';

const allPopulations = Array.from(document.querySelectorAll('.population')).map(
  (el) => +el.textContent.replace(/,/g, ''),
);

const totalPopulationValue = allPopulations.reduce((acc, item) => acc + item);
const averagePopulationValue = totalPopulationValue / allPopulations.length;

document.querySelector('.total-population').textContent =
  totalPopulationValue.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulationValue.toLocaleString('en-US');
