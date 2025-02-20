'use strict';

const collection = [...document.querySelectorAll('.population')];

const toNumbers = collection.map((el) => {
  return parseInt(el.textContent.replace(/,/g, ''));
});

const totalSum = toNumbers.reduce((sum, el) => sum + el, 0);

const average = Math.round(totalSum / toNumbers.length);

document.querySelector('.average-population').textContent =
  average.toLocaleString();

document.querySelector('.total-population').textContent =
  totalSum.toLocaleString();
