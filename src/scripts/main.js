'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

const totalPopulation = [...populations].reduce((sum, population) => {
  return sum + (Number(population.textContent.split(',').join('')) || 0);
}, 0);

totalPopulationEl.innerHTML = `${numberWithCommas(totalPopulation)}`;

averagePopulationEl.innerHTML = `${numberWithCommas(
  Math.round(totalPopulation / populations.length),
)}`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
