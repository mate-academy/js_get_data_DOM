'use strict';

const populationElements = document.querySelectorAll('.population');
const populations = Array.from(populationElements)
  .map((el) => Number(el.textContent.replace(/,/g, '')))
  .filter((num) => !isNaN(num));

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

function formatWithThousandsSeparator(number) {
  return number.toLocaleString('en-US');
}

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

averageElement.textContent = formatWithThousandsSeparator(
  Math.round(averagePopulation),
);
totalElement.textContent = formatWithThousandsSeparator(totalPopulation);
