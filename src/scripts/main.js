'use strict';

const populationElements = document.querySelectorAll('span.population');

const numbers = Array.from(populationElements)
  .map(element => parseFloat(element.textContent.replaceAll(',', '')))

  .filter(number => !isNaN(number));

const total = numbers.reduce((accumulator, currentValue) =>
  accumulator + currentValue, 0);

const average = total / numbers.length;

const formatNumber = number => number.toLocaleString();

const averageElement = document.querySelector('span.average-population');

const totalElement = document.querySelector('span.total-population');

averageElement.textContent = formatNumber(average);
totalElement.textContent = formatNumber(total);
