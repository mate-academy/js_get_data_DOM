'use strict';

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

function getPopulations() {
  const populationsSpans = document.querySelectorAll('.population');
  const numbers = [];

  populationsSpans.forEach((span) => {
    const text = span.textContent.replace(/,/g, '');
    const number = +text;

    if (!isNaN(number)) {
      numbers.push(number);
    }
  });

  return numbers;
}

function calculate() {
  const populations = getPopulations();

  const total = populations.reduce((sum, current) => sum + current, 0);
  const average = Math.round(total / populations.length);

  document.querySelector('.total-population').textContent = formatNumber(total);

  document.querySelector('.average-population').textContent =
    formatNumber(average);
}

calculate();
