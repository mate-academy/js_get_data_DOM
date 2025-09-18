'use strict';

const populationSpans = document.querySelectorAll('span.population');

const textExtractor = (s) => s.textContent.trim();
const populationTexts = Array.from(populationSpans, textExtractor);

const toNumber = (text) => {
  const cleaned = text.trim().replace(/[\u00A0\s,]/g, '');
  const n = Number(cleaned);

  return Number.isFinite(n) ? n : null;
};

const values = populationTexts.map(toNumber).filter((v) => v !== null);

const total = values.reduce((a, v) => a + v, 0);
const average = values.length ? total / values.length : 0;

const detectGroupSep = (texts) => {
  for (const t of texts) {
    const m = t.match(/\d{1,3}([,\u00A0\s])\d{3}(?:\1\d{3})+/);

    if (m) {
      return m[1];
    }
  }

  return ',';
};

const groupSep = detectGroupSep(populationTexts);

const formatWithSep = (n, sep) =>
  Math.trunc(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, sep);

document.querySelector('span.total-population').textContent = formatWithSep(
  total,
  groupSep,
);

document.querySelector('span.average-population').textContent = formatWithSep(
  Math.round(average),
  groupSep,
);
