'use strict';

const countries = document.querySelectorAll('.population');
let totalPopulation = 0;

for (const country of countries) {
  const amount = +country.innerText.split(',').join('');

  totalPopulation += amount;
}

const averagePopulation = totalPopulation / countries.length;

const totalStr
  = totalPopulation.toLocaleString('en-US', { maximumFractionDigits: 2 });
const averageStr
  = averagePopulation.toLocaleString('en-US', { maximumFractionDigits: 2 });

const spanTotal = document.querySelector('.total-population');

spanTotal.innerText = totalStr;

const spanAverage = document.querySelector('.average-population');

spanAverage.innerText = averageStr;
