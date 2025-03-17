'use strict';

const populationSpan = document.querySelectorAll('.population');
const population = Array.from(populationSpan)
  .map((span) => span.textContent)
  .map((text) => {
    const number = parseInt(text.replace(/[^0-9]/g, ''), 10);

    return isNaN(number) ? 0 : number;
  })
  .filter((number) => number != null);

const total = population.reduce((sum, num) => sum + num, 0);
const average = total / population.length;

const formatNumber = (num) => Math.floor(num).toLocaleString('en-US');
const fromTotal = formatNumber(total);
const fromAverage = formatNumber(average);

const totalSpan = document.querySelector('.total-population');

if (totalSpan) {
  totalSpan.textContent = fromTotal;
}

const averageSpan = document.querySelector('.average-population');

if (averageSpan) {
  averageSpan.textContent = fromAverage;
}
