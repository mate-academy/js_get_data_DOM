'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationSpans = document.querySelectorAll('span.population');
  const populations = [];
  let detectedSeparator = null;

  function detectSeparator(str) {

    const match = str.match(/(\d{1,3})([ ,.])\d{3}/);

    if (match) {
      return match[2];
    }

    return null;
  }

  function parseNumber(str, separator) {
    const trimmed = str.trim();

    if (!trimmed) {
      return null;
    }

    let cleaned = trimmed;

    if (separator) {
      if (separator === '.') {
        const dotCount = (cleaned.match(/\./g) || []).length;

        if (dotCount > 1) {
          cleaned = cleaned.replace(/\./g, '');
        }
      } else {
        const sepReg = new RegExp('\\' + separator, 'g');

        cleaned = cleaned.replace(sepReg, '');
      }
    }

    if (!separator || separator !== ' ') {
      cleaned = cleaned.replace(/ /g, '');
    }

    if (!/^\d+$/.test(cleaned)) {
      return null;
    }

    const n = Number(cleaned);

    return Number.isFinite(n) ? n : null;
  }

  function formatNumber(num, separator) {
    const s = num.toString();

    return s.replace(/\B(?=(\d{3})+(?!\d))/g, separator || '');
  }

  for (const span of populationSpans) {
    const sample = span.textContent.trim();
    const sep = detectSeparator(sample);

    if (sep) {
      detectedSeparator = sep;
      break;
    }
  }

  for (const span of populationSpans) {
    const raw = span.textContent.trim();
    const n = parseNumber(raw, detectedSeparator);

    if (n !== null) {
      populations.push(n);
    }
  }

  const totalSpan = document.querySelector('span.total-population');
  const averageSpan = document.querySelector('span.average-population');

  let total = 0;
  let average = 0;

  if (populations.length > 0) {
    total = populations.reduce((a, b) => a + b, 0);
    average = Math.round(total / populations.length);
  }

  const formattedTotal = formatNumber(total, detectedSeparator);
  const formattedAverage = formatNumber(average, detectedSeparator);

  if (totalSpan) {
    totalSpan.textContent = formattedTotal;
  }

  if (averageSpan) {
    averageSpan.textContent = formattedAverage;
  }
});
