'use strict';

const populationElement = document.querySelectorAll('.population');

// eslint-disable-next-line
const populations = [...populationElement].map((el) => Number(el.innerText.replace(/,/g, '')));

const total = populations.reduce((acc, num) => acc + num, 0);

const average = Math.round(total / populations.length);

document.querySelector('.total-population').innerText =
  total.toLocaleString('en-US');

document.querySelector('.average-population').innerText =
  average.toLocaleString('en-US');
