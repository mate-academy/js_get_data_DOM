'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...population].map(x => {
  return +x.innerText.split(',').join('');
}).reduce((a, b) => a + b);

const average = total / population.length;

const totalFormatted = Intl.NumberFormat('en-US').format(total);
const averagelFormatted = Intl.NumberFormat('en-US').format(average);

totalPopulation.innerText = totalFormatted;
averagePopulation.innerText = averagelFormatted;
