'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('span.population');

  let sep = '';

  for (const s of spans) {
    const txt = (s.textContent || '').trim();
    const m = txt.match(/(\d)([^\d])\d{3}(?:\D|$)/);

    if (m) {
      sep = m[2];
      break;
    }
  }

  const escapeRegExp = (ch) => ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const sepRe = sep ? new RegExp(escapeRegExp(sep), 'g') : null;

  const populations = Array.from(spans)
    .map((s) => s.textContent || '')
    .map((t) => {
      let cleaned = t.replace(/\u00A0/g, ' ').trim();

      if (sepRe) {
        cleaned = cleaned.replace(sepRe, '');
      }
      cleaned = cleaned.replace(/ /g, '');

      return cleaned === '' ? NaN : Number(cleaned);
    })
    .filter(Number.isFinite);

  let total = 0;
  let average = 0;

  if (populations.length) {
    total = populations.reduce((a, b) => a + b, 0);
    average = Math.round(total / populations.length);
  }

  const format = (num, s) => {
    if (!s) {
      return String(Math.trunc(num));
    }

    const useSep = s === ' ' ? '\u00A0' : s;
    const sign = num < 0 ? '-' : '';
    const str = Math.abs(Math.trunc(num)).toString();

    return sign + str.replace(/\B(?=(\d{3})+(?!\d))/g, useSep);
  };

  const totalEl = document.querySelector('.total-population');

  if (totalEl) {
    totalEl.textContent = format(total, sep);
  }

  const avgEl = document.querySelector('.average-population');

  if (avgEl) {
    avgEl.textContent = format(average, sep);
  }
});
