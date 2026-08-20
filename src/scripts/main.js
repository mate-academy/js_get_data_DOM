'use strict';

// write your code here
const listCountrys = document.querySelectorAll('.population');
let count = 0;

for (const country of listCountrys) {
  count += Number(country.textContent.replaceAll(',', ''));
}

const midle = count / listCountrys.length;

const niceCount = count.toLocaleString();
const niceMidle = midle.toLocaleString();

const population = document.querySelector('.average-population');

population.textContent = niceMidle;

const total = document.querySelector('.total-population');

total.textContent = niceCount;
