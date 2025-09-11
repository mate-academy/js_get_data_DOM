'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const popSpans = document.querySelectorAll('span.population');
  const texts = [];

  for (const el of popSpans) {
    if (el && typeof el.textContent === 'string') {
      texts.push(el.textContent.trim());
    }
  }

  const totalEl = document.querySelector('span.total-population');
  const averageEl = document.querySelector('span.average-population');

  if (!texts.length) {
    if (totalEl) {
      totalEl.textContent = '0';
    }

    if (averageEl) {
      averageEl.textContent = '0';
    }

    return;
  }

  const sample = texts[0].trim();

  let decimalSep = null;
  const m = sample.match(/\d([,.])\d+$/);

  if (m) {
    decimalSep = m[1];
  }

  let thousandSep = null;
  let head = sample;

  if (decimalSep) {
    const idx = sample.lastIndexOf(decimalSep);

    if (idx !== -1) {
      head = sample.slice(0, idx);
    }
  }

  for (let i = head.length - 1; i >= 0; i--) {
    const ch = head[i];

    if (ch === ',' || ch === '.' || ch === ' ' || ch === '\u00A0') {
      thousandSep = ch;
      break;
    }
  }

  const numbers = [];

  for (const raw of texts) {
    let s = raw.trim();

    if (thousandSep) {
      s = s.split(thousandSep).join('');
    } else {
      s = s.replace(/[\u00A0 ]/g, '');
    }

    if (decimalSep === ',') {
      s = s.replace(',', '.');
    }

    const value = Number.parseFloat(s);

    if (Number.isFinite(value)) {
      numbers.push(value);
    }
  }

  if (!numbers.length) {
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
        out = separator + out;
        counter = 0;
      }
    }

    return out;
  }

  function formatLikeInput(num) {
    const neg = num < 0;
    const abs = Math.abs(num);
    let str = (Math.round(abs * 100) / 100).toFixed(2);

    str = str.replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');

    const dotIdx = str.indexOf('.');
    const intPartRaw = dotIdx === -1 ? str : str.slice(0, dotIdx);
    const fracPart = dotIdx === -1 ? '' : str.slice(dotIdx + 1);
    const intPart = addThousandSep(intPartRaw, sep);

    return (neg ? '-' : '') + (fracPart ? intPart + dec + fracPart : intPart);
  }

  if (totalEl) {
    totalEl.textContent = formatLikeInput(total);
  }

  if (averageEl) {
    averageEl.textContent = formatLikeInput(avg);
  }
});
