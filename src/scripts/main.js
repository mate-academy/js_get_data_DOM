'use strict';

const getSelectorSpan = document.querySelectorAll('span.population');

const numbers = [];

getSelectorSpan.forEach((span) => {
  const text = span.textContent.trim();

  const cleaned = text.replace(/[\u00A0,\s]/g, '');

  if (/^\d+(?:\.\d+)?$/.test(cleaned)) {
    const number = Number(cleaned);

    numbers.push(number);
  }
});

if (numbers.length > 0) {
  const total = numbers.reduce((a, b) => a + b, 0);
  const average = total / numbers.length;

  const totalFormat = total.toLocaleString('en-US');
  const averageFormat = average.toLocaleString('en-US');

  document.querySelector('span.total-population').textContent = totalFormat;
  document.querySelector('span.average-population').textContent = averageFormat;
} else {
  document.querySelector('span.total-population').textContent = '';
  document.querySelector('span.average-population').textContent = '';
}
