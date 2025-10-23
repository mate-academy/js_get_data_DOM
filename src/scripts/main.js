'use strict';

const elements = [...document.querySelectorAll('span.population')];

const total = elements.reduce((sum, x) => {
  return sum + Number(x.textContent.replaceAll(',', ''));
}, 0);

const average = Math.floor(total / elements.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
