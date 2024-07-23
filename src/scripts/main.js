'use strict';

const populationSpans = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

let total = 0;

function parseNumber(str) {
  return parseInt(str.replace(/,/g, ''), 10);
}

populationSpans.forEach((span) => {
  total += parseNumber(span.textContent);
});

const average = total / populationSpans.length;

totalPopulationElement.textContent = total.toLocaleString('en-US');
averagePopulationElement.textContent = average.toLocaleString('en-US');
