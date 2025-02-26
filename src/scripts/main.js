'use strict';

const text = document.querySelectorAll('.population');
const arrPopulation = Array.from(text).map((span) => {
  return Number(span.innerText.split(',').join(''));
});
const total = arrPopulation.reduce((acc, n) => acc + n, 0);
const average = total / arrPopulation.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.trunc(average).toLocaleString('en-US');
