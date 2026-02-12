'use strict';

const populationSpans = document.querySelectorAll('.population');
const parsedNumbers = Array.from(populationSpans).map((span) => {
  const rawText = span.textContent.trim();

  const cleaned = rawText.replace(/,/g, '');
  if (rawText === '') {
    return NaN;
  }
  const number = Number(cleaned);

  return number;
});

const validNumbers = parsedNumbers.filter((n) => Number.isFinite(n));

const total = validNumbers.reduce((sum, value) => sum + value, 0);

const average = validNumbers.length > 0 ? total / validNumbers.length : 0;

const formatter = new Intl.NumberFormat('en-US');

document.querySelector('.total-population').textContent =
  formatter.format(total);

document.querySelector('.average-population').textContent = formatter.format(
  Math.round(average.toFixed(1)),
);
