'use strict';

// write your code here
const spans = document.querySelectorAll('span.population');

let firstText = '';

if (spans.length > 0) {
  firstText = spans[0].textContent || '';
}

const m = firstText.match(/(\d)([^\d])\d{3}(?:\D|$)/);
const sep = m ? m[2] : ',';

const populations = Array.from(spans)
  .map((s) => (s.textContent || '').replace(/\D+/g, ''))
  .map((t) => (t === '' ? NaN : Number(t)))
  .filter(Number.isFinite);

let total = 0;
let average = 0;

if (populations.length > 0) {
  total = populations.reduce((a, b) => a + b, 0);
  average = Math.round(total / populations.length);
}

const format = (num, s) => {
  const sign = num < 0 ? '-' : '';
  const str = Math.abs(num).toString();
  const out = str.replace(/\B(?=(\d{3})+(?!\d))/g, s);

  return sign + out;
};

const totalEl = document.querySelector('.total-population');

if (totalEl) {
  totalEl.textContent = format(total, sep);
}

const avgEl = document.querySelector('.average-population');

if (avgEl) {
  avgEl.textContent = format(average, sep);
}
