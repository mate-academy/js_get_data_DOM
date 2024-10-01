'use strict';

const elements = [...document.querySelectorAll('.population')].map(
  (el) => el.textContent,
);

const all = elements
  .map((el) => Number(el.replaceAll(/,/g, '')))
  .reduce((sum, x) => sum + x, 0);

document.querySelector('.total-population').textContent =
  all.toLocaleString('en-US');

document.querySelector('.average-population').textContent = (
  all / elements.length
).toLocaleString('en-US');
