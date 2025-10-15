'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationArray = document.querySelectorAll('.population');

  if (!populationArray.length) {
    return;
  }

  let totalAmount = 0;
  let validCount = 0;

  populationArray.forEach((number) => {
    const clean = number.textContent.replace(/[^0-9.-]/g, '');

    const value = Number(clean);

    if (Number.isFinite(value)) {
      totalAmount += value;
      validCount++;
    }
  });

  const averageAmount = validCount > 0 ? totalAmount / validCount : 0;

  const sampleText = populationArray[0]?.textContent || '';
  const usesComma = sampleText.includes(',');
  const usesSpace = sampleText.includes(' ');
  let locale = 'en-US';

  if (usesSpace) {
    locale = 'fr-FR';
  } else if (usesComma) {
    locale = 'en-US';
  }

  const formattedTotal = totalAmount.toLocaleString(locale);
  const formattedAverage = averageAmount.toLocaleString(locale);

  const totalEl = document.querySelector('.total-population');
  const avgEl = document.querySelector('.average-population');

  if (totalEl) {
    totalEl.textContent = formattedTotal;
  }

  if (avgEl) {
    avgEl.textContent = formattedAverage;
  }
});
