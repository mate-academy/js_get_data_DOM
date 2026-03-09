'use strict';

(() => {
  const totalEl = document.querySelector('.total-population');
  const avgEl = document.querySelector('.average-population');
  const populationSpans = [...document.getElementsByClassName('population')];
  const numbers = populationSpans
    .map(({ innerText }) => innerText.trim().replace(/\D/g, ''))
    .filter((s) => s !== '')
    .map((s) => Number(s));

  if (!numbers.length) {
    return;
  }

  const total = numbers.reduce((sum, p) => sum + p, 0);
  const average = Math.round(total / numbers.length);
  const locale = 'en-US';

  if (totalEl) {
    totalEl.innerText = total.toLocaleString(locale);
  }

  if (avgEl) {
    avgEl.innerText = average.toLocaleString(locale);
  }
})();
