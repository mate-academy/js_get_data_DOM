'use strict';

const populations = [...document.querySelectorAll('.population')].map(
  (el) => +el.textContent.replaceAll(',', ''),
);

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population').textContent =
  addSeparetor(totalPopulation);

document.querySelector('.average-population').textContent =
  addSeparetor(averagePopulation);

function addSeparetor(num) {
  return num.toLocaleString('en-US');
}
