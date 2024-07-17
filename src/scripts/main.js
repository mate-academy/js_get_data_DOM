'use strict';

const populations = [];

document.querySelectorAll('.population').forEach((el) => {
  populations.push(+el.textContent.replaceAll(',', ''));
});

const totalPopulation = populations.reduce((prev, cur) => prev + cur);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent = (
  totalPopulation / populations.length
).toLocaleString('en-US');
