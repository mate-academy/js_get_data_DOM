'use strict';

const populations = [...document.querySelectorAll('.population')].map(
  (el) => +el.textContent.replaceAll(',', ''),
);

const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

document.querySelector('.total-population').textContent = addSeparator(total);

document.querySelector('.average-population').textContent =
  addSeparator(average);

function addSeparator(num) {
  return num.toLocaleString('en-US');
}
