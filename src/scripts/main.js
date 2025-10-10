'use strict';

// write your code here
const totalElem = document.querySelector('.total-population');
const avgElem = document.querySelector('.average-population');
const nodes = document.querySelectorAll('.population');

const texts = [...nodes].map((n) => n.textContent.trim()).filter(Boolean);

let sep = ',';

for (const t of texts) {
  const match = t.match(/(\d)([.,\s])\d{3}(?!\d)/);

  if (match) {
    sep = match[2];
    break;
  }
}

function normalizeNumberString(str) {
  if (!str) {
    return null;
  }

  let s = str.replace(/\s+/g, '');

  const sepRegex = new RegExp(`\\${sep}(?=\\d{3}(\\D|$))`, 'g');

  s = s.replace(sepRegex, '');

  if (sep === '.' && s.includes(',')) {
    s = s.replace(',', '.');
  }

  s = s.trim();

  if (!/\d/.test(s)) {
    return null;
  }

  return s;
}

const numbers = texts
  .map((txt) => {
    const normalized = normalizeNumberString(txt);

    if (!normalized) {
      return NaN;
    }

    const n = Number(normalized);

    return Number.isFinite(n) ? n : NaN;
  })
  .filter(Number.isFinite);

let TOTAL = 0;
let AVERAGE = 0;

if (numbers.length > 0) {
  TOTAL = numbers.reduce((sum, n) => sum + n, 0);
  AVERAGE = TOTAL / numbers.length;
}

TOTAL = Math.round(TOTAL);
AVERAGE = Math.round(AVERAGE);

function formatNumber(num) {
  const str = String(num);
  const parts = [];
  let counter = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    parts.unshift(str[i]);
    counter++;

    if (counter % 3 === 0 && i !== 0) {
      parts.unshift(sep);
    }
  }

  return parts.join('');
}

if (totalElem) {
  totalElem.textContent = formatNumber(TOTAL);
}

if (avgElem) {
  avgElem.textContent = formatNumber(AVERAGE);
}
