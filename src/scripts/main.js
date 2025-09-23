'use strict';

const alSpan = document.querySelectorAll('.population');

const populations = Array.from(alSpan).map((el) => {
  return Number(el.textContent.replaceAll(',', ''));
});

const total = populations.reduce((acc, el) => acc + el, 0);
const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString('en-US');
