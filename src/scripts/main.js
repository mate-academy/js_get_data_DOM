'use strict';

const spans = Array.from(document.querySelectorAll('.population'));

const sum = spans.reduce((prev, current) => {
  const num = Number(current.textContent.replaceAll(',', ''));

  return prev + num;
}, 0);

const average = sum / spans.length;

document.querySelector('.total-population').textContent =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
