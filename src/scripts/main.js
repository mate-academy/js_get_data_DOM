'use strict';

const populationSpans = document.querySelectorAll('.population');

const populations = Array.from(populationSpans).map((span) => {
  const text = span.textContent.replace(/,/g, '');
  const num = parseInt(text, 10);

  return isNaN(num) ? 0 : num;
});

const total = populations.reduce((sum, val) => sum + val, 0);
const average = total / populations.length;

const formatNumber = (num) => num.toLocaleString();
const averageEl = document.querySelector('.average-population');
const totalEl = document.querySelector('.total-population');

averageEl.textContent = formatNumber(Math.round(average));
totalEl.textContent = formatNumber(total);
