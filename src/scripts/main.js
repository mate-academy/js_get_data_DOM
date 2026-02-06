'use strict';

const populationSpans = Array.from(document.querySelectorAll('.population'));

const populationNumbers = populationSpans
  .map((el) => {
    return Number(el.textContent.replaceAll(',', ''));
  })
  .filter((num) => {
    return !isNaN(num);
  });

const total = populationNumbers.reduce((sum, current) => sum + current, 0);
const average = total / populationNumbers.length;

const totalFormatted = total.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

const totalContainer = document.querySelector('.total-population');
const averageContainer = document.querySelector('.average-population');

totalContainer.textContent = totalFormatted;
averageContainer.textContent = averageFormatted;
