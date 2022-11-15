'use strict';

const populations = document.querySelectorAll('.population');
let populationTotal = 0;
const numberFormatter = Intl.NumberFormat('en-US');

populations.forEach(population => {
  const num = +population.textContent.split(',').join('');

  populationTotal += num;
});

document.querySelector('.total-population').textContent
  = numberFormatter.format(populationTotal);

document.querySelector('.average-population').textContent
  = numberFormatter.format(populationTotal / populations.length);
