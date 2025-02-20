'use strict';

let total = 0;

const allPopulation = [...document.querySelectorAll('.population')].map(
  (item) => {
    const el = parseInt(item.innerHTML.split(',').join(''));

    total += el;

    return el;
  },
);

const average = total / allPopulation.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
