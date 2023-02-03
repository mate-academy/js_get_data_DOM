'use strict';

const population = document.querySelectorAll('.population');
let total = 0;

for (let i = 0; i < population.length; i++) {
  const normalize = parseInt(population[i].textContent.replaceAll(',', ''));

  total += normalize;
}

const average = total / population.length;

document.querySelector('.total-population').textContent
  = total.toLocaleString('en-US');

document.querySelector('.average-population').textContent
  = average.toLocaleString('en-US');
