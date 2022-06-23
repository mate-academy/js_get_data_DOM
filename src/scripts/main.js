'use strict';

let total = 0;
let average = 0;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationsAllCountries = document.querySelectorAll('.population');

for (const element of populationsAllCountries) {
  const value = element.firstChild.textContent;
  const valueNum = parseInt(value.split(',').join(''));

  total += valueNum;
}

average = total / populationsAllCountries.length;

document.querySelector('.total-population').firstChild.textContent = total;
document.querySelector('.average-population').firstChild.textContent = average;

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
