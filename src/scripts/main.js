'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('.population');

  const populations = Array.from(populationSpans).map((span) => {
    const number = parseInt(span.textContent.replace(/,/g, ''), 10);

    return isNaN(number) ? 0 : number;
  });

  const total = populations.reduce((sum, num) => sum + num, 0);
  const average = total / populations.length;

  const formatNumber = (num) => num.toLocaleString('en-US');

  document.querySelector('.total-population').textContent = formatNumber(total);

  const averageSpan = document.querySelector('.average-population');

  averageSpan.textContent = formatNumber(Math.round(average));
});
