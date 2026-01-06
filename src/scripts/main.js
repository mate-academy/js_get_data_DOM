'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populations = document.querySelectorAll('.population');
  let totalPopulation = 0;

  for (const el of populations) {
    const text = el.textContent;
    const number = Number(text.replace(/,/g, ''));

    totalPopulation += number;
  }

  const averagePopulation = totalPopulation / populations.length;
  const totalEl = document.querySelector('.total-population');
  const averageEl = document.querySelector('.average-population');

  if (totalEl) {
    totalEl.textContent = totalPopulation.toLocaleString();
  }

  if (averageEl) {
    averageEl.textContent = Math.round(averagePopulation).toLocaleString();
  }
});
