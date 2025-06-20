'use strict';

// write your code here
const spansWitPopulation = Array.from(
  document.querySelectorAll('span.population'),
);

const totalPopulation = spansWitPopulation.reduce((sum, element) => {
  return sum + parseInt(element.textContent.replace(/,/g, ''));
}, 0);

const averagePopulation = totalPopulation / spansWitPopulation.length;

function toStringWithCommas(number) {
  return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

const totalPopulationSpan = document.querySelector('.total-population');

totalPopulationSpan.textContent = toStringWithCommas(totalPopulation);

const averagePopulationSpan = document.querySelector('.average-population');

averagePopulationSpan.textContent = toStringWithCommas(averagePopulation);
