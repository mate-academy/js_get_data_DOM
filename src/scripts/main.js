'use strict';

function formatNumber(num) {
  return num.toLocaleString();
}

const populations = [...document.querySelectorAll('span.population')];

let total = 0;

populations.forEach((el) => {
  const value = parseInt(el.textContent.replace(/,/g, ''), 10);

  if (!isNaN(value)) {
    total += value;
  }
});

const average =
  populations.length > 0 ? Math.floor(total / populations.length) : 0;

const totalEl = document.querySelector('span.total-population');
const averageEl = document.querySelector('span.average-population');

if (totalEl) {
  totalEl.textContent = formatNumber(total);
}

if (averageEl) {
  averageEl.textContent = formatNumber(average);
}
