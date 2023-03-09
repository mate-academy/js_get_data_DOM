'use strict';

const population = document.querySelectorAll('.population');
let total = 0;

for (const country of population) {
  total += parseFloat(country.innerHTML.replace(/,/g, ''));
}

const average = total / population.length;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

document.querySelector('.total-population').innerHTML = formattedTotal;
document.querySelector('.average-population').innerHTML = formattedAverage;
