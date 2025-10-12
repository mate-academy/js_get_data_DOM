'use strict';

(function calculatePopulations(options = {}) {
  const {
    locale = 'en-US',
    roundAverage = true,
    defaultWhenEmpty = 'leave',
  } = options;

  const populationElements = document.querySelectorAll('.population');

  if (!populationElements || populationElements.length === 0) {
    if (defaultWhenEmpty === 'zero') {
      const totalElEmpty = document.querySelector('.total-population');
      const avgElEmpty = document.querySelector('.average-population');

      if (totalElEmpty) {
        totalElEmpty.textContent = new Intl.NumberFormat(locale).format(0);
      }

      if (avgElEmpty) {
        avgElEmpty.textContent = new Intl.NumberFormat(locale).format(0);
      }
    }

    return;
  }

  function cleanNumericString(str) {
    if (typeof str !== 'string') {
      return '';
    }

    let s = str.replace(/\u00A0/g, ' ').trim();

    s = s.replace(/[^\d.-]+/g, '');

    if (!s) {
      return '';
    }

    if (!/^-?\d+(\.\d+)?$/.test(s)) {
      return '';
    }

    return s;
  }

  const parsedNumbers = Array.from(populationElements, (span) => {
    const raw = span.textContent || '';
    const cleaned = cleanNumericString(raw);

    if (cleaned === '') {
      return null;
    }

    const num = Number(cleaned);

    return Number.isFinite(num) ? num : null;
  }).filter((n) => n !== null);

  if (parsedNumbers.length === 0) {
    if (defaultWhenEmpty === 'zero') {
      const nfEmpty = new Intl.NumberFormat(locale);
      const totalElEmpty = document.querySelector('.total-population');
      const avgElEmpty = document.querySelector('.average-population');

      if (totalElEmpty) {
        totalElEmpty.textContent = nfEmpty.format(0);
      }

      if (avgElEmpty) {
        avgElEmpty.textContent = nfEmpty.format(0);
      }
    }

    return;
  }

  const total = parsedNumbers.reduce((acc, v) => acc + v, 0);
  let average = total / parsedNumbers.length;

  if (roundAverage) {
    average = Math.round(average);
  }

  const nf = new Intl.NumberFormat(locale, {
    maximumFractionDigits: roundAverage ? 0 : 2,
  });

  const totalEl = document.querySelector('.total-population');
  const avgEl = document.querySelector('.average-population');

  if (totalEl) {
    totalEl.textContent = nf.format(total);
  }

  if (avgEl) {
    avgEl.textContent = nf.format(average);
  }
})();
