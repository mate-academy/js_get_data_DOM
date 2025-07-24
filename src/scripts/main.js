'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = [];

  populationElements.forEach((el) => {
    const number = parseInt(el.textContent.replace(/,/g, ''), 10);

    populations.push(number);
  });

  const total = populations.reduce((sum, num) => sum + num, 0);
  const average = total / populations.length;

  const formatNumber = (num) => num.toLocaleString('en-US');

  document.querySelector('.total-population').textContent = formatNumber(total);

  document.querySelector('.average-population').textContent = formatNumber(
    Math.round(average),
  );
});
