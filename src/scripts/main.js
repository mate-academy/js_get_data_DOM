'use strict';

const populationSpans = document.querySelectorAll('span.population');

const populations = Array.from(populationSpans)
  .map((span) => span.textContent.replace(/\D/g, '').trim())
  .filter((str) => str !== '')
  .map(Number)
  .filter(Number.isFinite);

const total = populations.reduce((sum, num) => sum + num, 0);
const average = populations.length ? total / populations.length : 0;

function formatNumber(num) {
  const sample = Array.from(document.querySelectorAll('span.population'))
    .map((span) => span.textContent)
    .find((text) => /\d/.test(text));

  if (sample) {
    const match = sample.match(/[^0-9]/);
    const separator = match ? match[0] : ',';

    const parts = num.toString().split('').reverse();
    const groups = [];

    for (let i = 0; i < parts.length; i += 3) {
      groups.push(parts.slice(i, i + 3).join(''));
    }

    return groups.join(separator).split('').reverse().join('');
  }

  return num.toLocaleString();
}

const totalSpan = document.querySelector('span.total-population');
const averageSpan = document.querySelector('span.average-population');

if (totalSpan && totalSpan.textContent.trim() === 'Calculate it!') {
  totalSpan.textContent = formatNumber(total);
}

if (averageSpan && averageSpan.textContent.trim() === 'Calculate it!') {
  averageSpan.textContent = formatNumber(average);
}
