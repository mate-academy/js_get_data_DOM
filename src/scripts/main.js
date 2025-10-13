'use strict';

const populationSpans = document.querySelectorAll('span.population');

const populations = Array.from(populationSpans)
  .map((span) => span.textContent.replace(/[^0-9.-]/g, '').trim())
  .filter((str) => str !== '')
  .map(Number)
  .filter(Number.isFinite);

const total = populations.reduce((sum, num) => sum + num, 0);
const average = populations.length ? total / populations.length : 0;

function formatNumber(num) {
  const sample = document.querySelector('span.population');

  if (sample) {
    const sampleText = sample.textContent;

    if (sampleText.includes(',')) {
      return num.toLocaleString('en-US');
    }

    if (sampleText.includes(' ')) {
      return num.toLocaleString('uk-UA');
    }
  }

  return num.toLocaleString();
}

const totalSpan = document.querySelector('span.total-population');
const averageSpan = document.querySelector('span.average-population');

if (totalSpan && totalSpan.textContent.trim() === 'Calculate it!') {
  totalSpan.textContent = formatNumber(total);
}

if (averageSpan && averageSpan.textContent.trim() === 'Calculate it!') {
  averageSpan.textContent = formatNumber(Math.round(average));
}
