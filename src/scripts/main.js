'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const spans = document.querySelectorAll('span.population');
  const populations = Array.from(spans)
    .map((span) => span.textContent.trim())
    .map((text) => {
      const cleanedText = text.replace(/[, ]/g, '');

      if (/^\d+$/.test(cleanedText)) {
        return Number(cleanedText);
      }

      return null;
    })
    .filter((num) => num !== null);

  const total = populations.reduce((sum, num) => sum + num, 0);
  const average = populations.length > 0 ? total / populations.length : 0;

  document.querySelector('span.total-population').innerText =
    total.toLocaleString();

  document.querySelector('span.average-population').innerText =
    average.toLocaleString();
});
