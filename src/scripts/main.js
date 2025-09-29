'use strict';

if (!window.__populationsComputed) {
  window.__populationsComputed = true;
}

function chunkString(str) {
  const numeric = str.replace(/[^\d.-]/g, '');
  const number = Number(numeric);

  return new Intl.NumberFormat(navigator.language).format(number);
}

const populationArr = [...document.querySelectorAll('.population')].reduce(
  (acc, i) => {
    const num = Number(i.textContent.replace(/[^\d]/g, ''));

    if (Number.isFinite(num)) {
      acc.push(num);
    }

    return acc;
  },
  [],
);

const count = populationArr.length;
const sum = populationArr.reduce((a, b) => a + b, 0);
const avg = count ? Math.round(sum / count) : 0;

const totalEl = document.querySelector('.total-population');

if (totalEl) {
  totalEl.textContent = chunkString('' + sum);
}

const avgEl = document.querySelector('.average-population');

if (avgEl) {
  avgEl.textContent = chunkString('' + avg);
}
