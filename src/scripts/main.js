'use strict';

// write your code here
const populationSpans = [...document.querySelectorAll('span.population')];

let sampleText = '';

for (const span of populationSpans) {
  const text = span.textContent.trim();
  const rawValue = text.replace(/[,\s.\u00A0\u202F]/g, '');
  const num = Number(rawValue);

  if (Number.isFinite(num) && num > 0 && text.length > 0) {
    sampleText = text;
    break;
  }
}

let detectedSeparator = null;

if (sampleText) {
  const separatorMatch = sampleText.match(
    /(\d)([,\s.\u00A0\u202F])(\d{3}(?:[,\s.\u00A0\u202F]|$))/,
  );

  if (separatorMatch) {
    detectedSeparator = separatorMatch[2];
  }
}

const validNumbers = populationSpans
  .map((span) => {
    const rawValue = span.textContent.trim().replace(/[,\s.\u00A0\u202F]/g, '');

    return Number(rawValue);
  })
  .filter((num) => Number.isFinite(num) && num > 0);

let total = 0;
let average = 0;

if (validNumbers.length > 0) {
  total = validNumbers.reduce((sum, num) => sum + num, 0);
  average = Math.round(total / validNumbers.length);
} else {
  total = 0;
  average = 0;
}

function formatInSameStyle(number) {
  if (!detectedSeparator) {
    return number.toString();
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, detectedSeparator);
}

if (validNumbers.length > 0) {
  document.querySelectorAll('span.average-population').forEach((element) => {
    element.textContent = formatInSameStyle(average);
  });

  document.querySelectorAll('span.total-population').forEach((element) => {
    element.textContent = formatInSameStyle(total);
  });
} else {
  document.querySelectorAll('span.average-population').forEach((element) => {
    element.textContent = 'N/A';
  });

  document.querySelectorAll('span.total-population').forEach((element) => {
    element.textContent = 'N/A';
  });
}
