'use strict';

const allCountries = [...document.querySelectorAll('.population')];
let totalPopulation = 0;
let averagePopulation = 0;
let count = 0;

for (const country of allCountries) {
  const value = country.textContent.split(',').join('');

  if (!isNaN(value)) {
    totalPopulation += +value;
    count++;
  }
}

if (count !== 0) {
  averagePopulation = totalPopulation / count;
}

const formatTotal = new Intl.NumberFormat('en-US').format(totalPopulation);
const formatAverage = new Intl.NumberFormat('en-US').format(averagePopulation);
const finalTotal = document.querySelector('.total-population');
const finalAverage = document.querySelector('.average-population');

finalTotal.textContent = formatTotal;
finalAverage.textContent = formatAverage;
