'use strict';

const populationElements = [...document.querySelectorAll('.population')];

const populationNumbers = populationElements
  .map((item) => Number(item.textContent.replaceAll(',', '')))
  .filter((item) => !Number.isNaN(item));

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const total = populationNumbers.reduce((acc, curr) => acc + curr, 0);
const average =
  populationNumbers.length > 0
    ? Math.round(total / populationNumbers.length)
    : 0;

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
