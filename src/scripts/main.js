'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const popSpans = document.querySelectorAll('span.population');
  const texts = [];

  for (const el of popSpans) {
    if (el && typeof el.textContent === 'string') {
      texts.push(el.textContent.trim());
    }
  }

  let thousandSep = null;

  if (texts.length > 0) {
    const sample = texts[0].trim();

    for (let i = sample.length - 1; i >= 0; i--) {
      const ch = sample[i];

      if (ch === ',' || ch === '.' || ch === ' ' || ch === '\u00A0') {
        thousandSep = ch;
        break;
      }
    }
  }

  let decimalSep = null;

  if (texts.length > 0) {
    const sample = texts[0];

    if (sample.includes(',') && thousandSep !== ',') {
      decimalSep = ',';
    } else if (sample.includes('.') && thousandSep !== '.') {
      decimalSep = '.';
    }
  }

  const numbers = [];

  for (const raw of texts) {
    let s = raw;

    if (thousandSep) {
      s = s.split(thousandSep).join('');
    } else {
      s = s.replaceAll(' ', '').replaceAll('\u00A0', '');
    }

    if (decimalSep === ',') {
      s = s.replace(',', '.');
    }

    const value = Number.parseFloat(s);

    if (Number.isFinite(value)) {
      numbers.push(value);
    }
  }

  const totalEl = document.querySelector('span.total-population');
  const averageEl = document.querySelector('span.average-population');

  if (numbers.length === 0) {
    if (totalEl) {
      totalEl.textContent = '0';
    }

    if (averageEl) {
      averageEl.textContent = '0';
    }

    return;
  }

  let total = 0;

  for (const n of numbers) {
    total += n;
  }

  const avg = total / numbers.length;

  const sep = thousandSep || ',';
  const dec = decimalSep || '.';

  function addThousandSep(numStr, separator) {
    let out = '';
    let counter = 0;

    for (let i = numStr.length - 1; i >= 0; i--) {
      out = numStr[i] + out;
      counter++;

      if (counter === 3 && i !== 0) {
        out = sep + out;
        counter = 0;
      }
    }

    return out;
  }

  function formatLikeInput(num) {
    const isInt = Number.isInteger(num);
    const abs = Math.abs(num);

    const parts = abs.toString().split('.');
    let intPart = parts[0];
    const fracPart = parts[1] || '';

    intPart = addThousandSep(intPart, sep);

    const sign = num < 0 ? '-' : '';

    if (!isInt && fracPart) {
      return sign + intPart + dec + fracPart;
    }

    return sign + intPart;
  }

  if (totalEl) {
    totalEl.textContent = formatLikeInput(total);
  }

  if (averageEl) {
    averageEl.textContent = formatLikeInput(avg);
  }
});
