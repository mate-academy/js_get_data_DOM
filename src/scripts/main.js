'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');
  const totalElement = document.querySelector('.total-population');
  const averageElement = document.querySelector('.average-population');

  const populations = Array.from(populationElements).map((el) => {
    return parseInt(el.textContent.replace(/,/g, ''), 10);
  });

  const total = populations.reduce((sum, pop) => sum + pop, 0);
  const average = Math.round(total / populations.length);

  const formatNumber = (pop) => pop.toLocaleString('en-US');

  totalElement.textContent = formatNumber(total);
  averageElement.textContent = formatNumber(average);
});
