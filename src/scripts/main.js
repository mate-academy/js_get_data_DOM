'use strict';

function parsePopulation(text) {
  return Number(text.replaceAll(',', ''));
}

const populationElements = document.querySelectorAll('.population');

const populationNumbers = Array.from(populationElements)
  .map((el) => parsePopulation(el.textContent))
  .filter((num) => !isNaN(num));

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const average = total / populationNumbers.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
