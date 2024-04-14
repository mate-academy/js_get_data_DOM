/* eslint-disable function-paren-newline */
'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', function () {
  const populationElements = document.querySelectorAll('.population');
  const populations = Array.from(populationElements).map((el) =>
    parseInt(el.textContent.replace(/,/g, '')),
  );
  const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);
  const averagePopulation = totalPopulation / populations.length;

  const formatNumber = (num) => num.toLocaleString();

  const averageSpan = document.querySelector('.average-population');
  const totalSpan = document.querySelector('.total-population');

  if (averageSpan && totalSpan) {
    averageSpan.textContent = formatNumber(Math.round(averagePopulation));
    totalSpan.textContent = formatNumber(totalPopulation);
  }
});
