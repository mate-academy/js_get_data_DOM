'use strict';

const textData = document.querySelectorAll('.population');
let totalPopulation = 0;
let averagePopulation = 0;

for (const value of textData) {
  totalPopulation += +(value.firstChild.textContent).replaceAll(',', '');
}

averagePopulation = totalPopulation / textData.length;

document.querySelector('.average-population').innerHTML
  = averagePopulation.toLocaleString();

document.querySelector('.total-population').innerHTML
  = totalPopulation.toLocaleString();
