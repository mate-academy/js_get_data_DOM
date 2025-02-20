'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  const number = Number(el.textContent.replace(/,/g, ''));

  return isNaN(number) ? 0 : number;
});

const totalPopulation = populations.reduce(
  (sum, population) => sum + population,
  0,
);
const averagePopulation = Math.round(totalPopulation / populations.length);

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

if (averageElement) {
  averageElement.textContent = formatNumberWithCommas(averagePopulation);
}

if (totalElement) {
  totalElement.textContent = formatNumberWithCommas(totalPopulation);
}
