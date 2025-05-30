'use strict';

const element = document.querySelectorAll('.population');
const arr = [...element].map((item) => {
  return Number(item.textContent.replaceAll(',', ''));
});

const total = arr.reduce((sum, item) => sum + item, 0);
const average = Math.floor(total / arr.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
