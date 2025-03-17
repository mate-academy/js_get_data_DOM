'use strict';

const populationSpan = document.querySelectorAll('.population');
const population = Array.from(populationSpan)
  .map((span) => span.textContent)
  .map((text) => {
    const number = parseInt(text.replace(/[^0-9]/g, ''), 10);

    return isNaN(number) ? null : number;
  })
  .filter((number) => number !== null);

const total = population.reduce((sum, num) => sum + num, 0);
const averange = total / population.length;

const formatNumber = (num) => Math.floor(num).toLocaleString('en-Us');
const fromTotal = formatNumber(total);
const fromAverange = formatNumber(averange);

const totalSpan = document.querySelector('.total-population');

if (totalSpan) {
  totalSpan.textContent = fromTotal;
}

const averangeSpan = document.querySelector('.average-population');

if (averangeSpan) {
  averangeSpan.textContent = fromAverange;
}
