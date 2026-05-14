'use strict';

const countries = document.querySelectorAll('.population');
let total = 0;
let count = 0;

for (const country of countries) {
  const cleaned = country.textContent.replaceAll(',', '');
  const number = Number(cleaned);

  if (!isNaN(number)) {
    total += number;
    count++;
  }
}

const average = total / count;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
