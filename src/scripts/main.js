'use strict';

function getPopulationsRowFormat(text) {
  const cleanedText = (text || '').replace(/[\s\u00A0,]/g, '');
  const n = Number(cleanedText);

  return Number.isFinite(n) ? n : NaN;
}

function formatWithCommas(n) {
  const rounded = Math.round(n);

  return String(rounded).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calcPopulation() {
  const els = document.querySelectorAll('.population');
  const values = [];

  els.forEach((el) => {
    const n = getPopulationsRowFormat(el.textContent);

    if (Number.isFinite(n)) {
      values.push(n);
    }
  });

  const sum = values.reduce((acc, x) => acc + x, 0);
  const avg = values.length ? sum / values.length : 0;

  const sumText = formatWithCommas(sum);
  const avgText = formatWithCommas(avg);

  const totalEl = document.querySelector('.total-population');

  if (totalEl) {
    totalEl.textContent = sumText;
  }

  const avgEl = document.querySelector('.average-population');

  if (avgEl) {
    avgEl.textContent = avgText;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  calcPopulation();
});
