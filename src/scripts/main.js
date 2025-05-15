'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements)
    .map((el) => parseInt(el.textContent.replace(/,/g, ''), 10))
    .filter((num) => !isNaN(num));

  const total = populations.reduce((sum, num) => sum + num, 0);
  const average = Math.round(total / populations.length);

  const formatedTotal = total.toLocaleString();
  const formatedAverage = average.toLocaleString();

  document.querySelector('.total-population').textContent = formatedTotal;
  document.querySelector('.average-population').textContent = formatedAverage;
});
