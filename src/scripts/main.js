'use strict';

const spans = document.querySelectorAll('.population');

const populations = [...spans]
  .map((span) => {
    const cleaned = span.innerText.replaceAll(',', '');
    const num = Number(cleaned);

    return Number.isFinite(num) ? num : null;
  })
  .filter((num) => num !== null);

const total = populations.reduce((sum, num) => sum + num, 0);

const average = populations.length > 0 ? total / populations.length : 0;

document.querySelector('.total-population').innerText = total.toLocaleString();

document.querySelector('.average-population').innerText =
  average.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
