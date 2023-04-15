'use strict';

let total = 0;
const data = document.querySelectorAll('.population');

for (const country of data) {
  const numbers = country.textContent.replace(/,/g, '');

  total += Number(numbers);
}

const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = formatNumber(total);
avaragePopulation.innerHTML = formatNumber(total / data.length);

function formatNumber(startNumber) {
  return startNumber.toLocaleString('en-US');
}
