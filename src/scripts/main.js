'use strict';

'use strict';

// Helper: Detect thousands separator from sample
function detectSeparator(text) {
  const match = text.match(/[\u00A0, ]/);

  return match ? match[0] : ',';
}

// Helper: Parse population safely
function parsePopulation(text) {
  const cleaned = text
    .trim()
    .replace(/\u00A0/g, '')
    .replace(/,/g, '')
    .replace(/ /g, '');
  const n = Number(cleaned);

  return Number.isFinite(n) ? n : null;
}

// Helper: Format number with detected separator
function formatWithSeparator(num, separator) {
  const parts = num.toLocaleString('en-US').split(',');

  return parts.join(separator);
}

const countryElements = [...document.getElementsByClassName('population')];

let detectedSeparator = ',';

for (const el of countryElements) {
  const sample = el.textContent.trim();

  if (sample) {
    const sep = detectSeparator(sample);

    if (sep) {
      detectedSeparator = sep;
      break;
    }
  }
}

const populationArr = [];

for (const el of countryElements) {
  const value = parsePopulation(el.textContent);

  if (value !== null) {
    populationArr.push(value);
  }
}

const validCount = populationArr.length;
const total = populationArr.reduce((sum, n) => sum + n, 0);
const avg = validCount ? Math.round(total / validCount) : 0;

const totalElement = document.querySelector('.total-population');
const avgElement = document.querySelector('.average-population');

if (totalElement) {
  totalElement.textContent = formatWithSeparator(total, detectedSeparator);
}

if (avgElement) {
  avgElement.textContent = formatWithSeparator(avg, detectedSeparator);
}
