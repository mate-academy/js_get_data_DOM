/* eslint-disable max-len */
'use strict';

const populationsSpan = document.querySelectorAll('.population');
// eslint-disable-next-line prettier/prettier
const populationsArray = Array.from(populationsSpan).map((span) => Number(span.textContent.split(',').join('')));
const total = populationsArray.reduce((acc, num) => acc + num, 0);
const average = total / populationsArray.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
