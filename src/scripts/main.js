'use strict';

const spanAll = document.querySelectorAll('span.population');

const numbers = Array.from(spanAll).map((span) => {
  const text = span.textContent;

  return Number(text.replace(/,/g, ''));
});

const total = numbers.reduce((acc, num) => acc + num, 0);
const average = total / numbers.length;

const totalFormatted = total.toLocaleString();
const averageFormatted = Math.round(average).toLocaleString();

document.querySelector('span.total-population').textContent = totalFormatted;

document.querySelector('span.average-population').textContent =
  averageFormatted;
