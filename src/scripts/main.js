'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const totalPoputation = [...populations].reduce((previous, nextAmount) => {
  const number = Number(nextAmount.textContent.replace(/,/g, ''));

  return previous + number;
}, 0);

const averagePopulation = totalPoputation / populations.length;

totalPopulationElement.textContent = formatNumber(totalPoputation);
averagePopulationElement.textContent = formatNumber(averagePopulation);

function formatNumber(number) {
  const splitNumber = [...String(number)];

  for (let i = splitNumber.length - 3; i > 0; i -= 3) {
    splitNumber.splice(i, 0, ',');
  }

  return splitNumber.join('');
}
