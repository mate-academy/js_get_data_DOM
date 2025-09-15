'use strict';

const nodes = document.querySelectorAll('span.population');
const texts = [...nodes].map((el) => (el.textContent || '').trim());

function detectSep(arr) {
  const m = arr
    .join(' ')
    .match(/(\d{1,3})([ ,.\u00A0\u202F])(?=\d{3}(?:\2\d{3})+)/);

  return m ? m[2] : ',';
}

const sep = detectSep(texts);

function toNumber(raw, separator) {
  const esc = (s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

  const re =
    separator === ' '
      ? new RegExp(`[\\s\\u00A0\\u202F]`, 'g')
      : separator === '\u00A0' || separator === '\u202F'
        ? new RegExp(`[\\u00A0\\u202F]`, 'g')
        : new RegExp(esc(separator), 'g');

  const cleaned = (raw || '').replace(re, '').trim();
  const n = Number(cleaned);

  return cleaned !== '' && Number.isFinite(n) ? n : null;
}

const values = texts.map((t) => toNumber(t, sep)).filter((n) => n !== null);

function format(n, separator) {
  const s = Math.trunc(n).toString();

  return s.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

const $total = document.querySelector('.total-population');
const $avg = document.querySelector('.average-population');

if (values.length === 0) {
  const z = format(0, sep);

  if ($total) {
    $total.textContent = z;
  }

  if ($avg) {
    $avg.textContent = z;
  }
} else {
  const total = values.reduce((a, b) => a + b, 0);
  const average = Math.round(total / values.length);

  if ($total) {
    $total.textContent = format(total, sep);
  }

  if ($avg) {
    $avg.textContent = format(average, sep);
  }
}
