'use strict';

const allPopulations = [...document.querySelectorAll('.population')];
let total = 0;
let count = 0;

allPopulations.forEach((el) => {
  total += +el.textContent.replace(/\D/g, '');
  count++;
});

document.querySelector('.total-population').innerHTML = total.toLocaleString();

document.querySelector('.average-population').innerHTML = Math.round(
  total / count,
).toLocaleString();
