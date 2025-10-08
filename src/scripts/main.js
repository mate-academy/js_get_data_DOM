'use strict';

const populationNumbers = [...document.querySelectorAll('.population')]
  .map((span) => span.textContent.trim())
  .map((text) => text.replace(/[\s, ]/g, ''))
  .filter((cleaned) => /^-?\d+$/.test(cleaned))
  .map((valid) => Number(valid))
  .filter(Number.isFinite);

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const average = populationNumbers.length ? total / populationNumbers.length : 0;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString();
