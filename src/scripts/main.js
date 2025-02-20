'use strict';

const populationElements = document.querySelectorAll('.population');
const populations = [];

populationElements.forEach((element) => {
  const populationText = element.textContent.replace(/,/g, '');
  const populationNumber = parseInt(populationText, 10);

  if (!isNaN(populationNumber)) {
    populations.push(populationNumber);
  }
});

const totalPopulation = populations.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
const averagePopulation =
  populations.length > 0 ? totalPopulation / populations.length : 0;

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(averagePopulation),
);
