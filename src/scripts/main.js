'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('span.population');

  if (populationSpans.length === 0) {
    return;
  }

  const sampleText = populationSpans[0].textContent.trim();
  const separatorMatch = sampleText.match(/[^0-9]/);
  const groupingSeparator = separatorMatch ? separatorMatch[0] : ',';

  const populations = Array.from(populationSpans)
    .map((span) =>
      // eslint-disable-next-line prettier/prettier
      span.textContent.replace(new RegExp(`\\${groupingSeparator}`, 'g'), ''))
    .map((numStr) => Number(numStr))
    .filter((num) => Number.isFinite(num));

  const total =
    populations.length > 0 ? populations.reduce((acc, val) => acc + val, 0) : 0;

  const average = populations.length > 0 ? total / populations.length : 0;

  const formatWithSeparator = (num) =>
    new Intl.NumberFormat('en-US').format(num).replace(/,/g, groupingSeparator);

  // --- Update DOM ---
  document.querySelector('span.total-population').textContent =
    formatWithSeparator(total);

  document.querySelector('span.average-population').textContent =
    formatWithSeparator(Math.round(average));
});
