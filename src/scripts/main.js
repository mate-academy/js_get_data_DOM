'use strict';

function detectSeparators(text) {
  const decimalMatch = text.match(/(\d+)([.,])(\d{1,2})$/);
  const innerDecimal = decimalMatch ? decimalMatch[2] : '.';

  const thousandsMatch = text.match(/(\d{1,3})([^\d])\d{3}(\D|$)/);
  const innerThousands = thousandsMatch ? thousandsMatch[2] : ',';

  return { decimalSeparator: innerDecimal, thousandsSeparator: innerThousands };
}

function parseNumber(text, decSeparator) {
  if (!text) {
    return null;
  }

  // usuwamy wszystkie możliwe separatory
  const cleaned = text
    .replace(new RegExp(`[\\s\u00A0\u202F.,](?=\\d{3}(\\D|$))`, 'g'), '')
    // zamieniamy separator dziesiętny na kropkę
    .replace(decSeparator, '.');

  const value = Number(cleaned);

  return Number.isFinite(value) ? value : null;
}

function formatNumber(num, thousandsSep = ',', decimalSep = '.') {
  const [intPartRaw, decPart] = num.toString().split('.');
  let intPart = intPartRaw;

  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);

  return decPart ? intPart + decimalSep + decPart : intPart;
}

// --- Główna logika ---

const spans = document.querySelectorAll('.population');

let sampleText = '';

for (const span of spans) {
  if (span.textContent.trim()) {
    sampleText = span.textContent.trim();
    break;
  }
}

const { decimalSeparator, thousandsSeparator } = detectSeparators(sampleText);

const numbers = Array.from(spans)
  .map((span) => parseNumber(span.textContent.trim(), decimalSeparator))
  .filter((n) => n !== null);

const total = numbers.reduce((acc, cur) => acc + cur, 0);
const average = numbers.length > 0 ? Math.round(total / numbers.length) : 0;

const span1 = document.querySelector('.total-population');

span1.textContent = formatNumber(total, thousandsSeparator, decimalSeparator);

const span2 = document.querySelector('.average-population');

span2.textContent = formatNumber(average, thousandsSeparator, decimalSeparator);
