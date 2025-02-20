'use strict';

const values = [...document.querySelectorAll('.population')];
const populations = values.map((element) => {
  const populationString = element.textContent.replace(/,/g, '');

  return Number(populationString);
});
const total = populations.reduce((acc, currentValue) => acc + currentValue, 0);
const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
