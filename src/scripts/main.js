'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('.population');
  const numbers = [];

  populationSpans.forEach((span) => {
    const text = span.textContent.trim().replace(/,/g, '');
    const number = parseInt(text, 10);

    if (!isNaN(number)) {
      numbers.push(number);
    }
  });

  const total = numbers.reduce((acc, num) => acc + num, 0);
  const average = total / numbers.length;

  const formatNumber = (num) => num.toLocaleString('en-US');

  document.querySelector('.total-population').textContent = formatNumber(total);

  document.querySelector('.average-population').textContent = formatNumber(
    Math.round(average),
  );
});
