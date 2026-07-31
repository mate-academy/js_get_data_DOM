'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map((x) => x.textContent)
  .map((x) => Number(x.replaceAll(',', '')));

const populationsSum = populations.reduce((acc, value) => acc + value, 0);

const sum = document.querySelector('.total-population');

sum.innerText = populationsSum.toLocaleString();

const average = document.querySelector('.average-population');

average.innerText = Math.round(
  populationsSum / populations.length,
).toLocaleString();
