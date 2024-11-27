'use strict';

const populationList = [...document.querySelectorAll('.population')].map(
  (item) => +item.textContent.replaceAll(',', ''),
);

const total = populationList.reduce((sum, item) => sum + item, 0);

const average = Math.round(total / populationList.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
