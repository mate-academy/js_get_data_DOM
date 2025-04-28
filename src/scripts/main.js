'use strict';

const populationElements = document.querySelectorAll('span.population');

const numbers = [];

populationElements.forEach((elem) => {
  const number = Number(elem.textContent.replace(/,/g, ''));

  if (!isNaN(number)) {
    numbers.push(number);
  }
});

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = total / numbers.length;

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

document.querySelector('span.total-population').textContent =
  formatNumber(total);

document.querySelector('span.average-population').textContent = formatNumber(
  Math.round(average),
);
