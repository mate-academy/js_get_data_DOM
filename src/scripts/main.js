'use strict';

let count = 0;
let total = 0;

const populationClassList = document.getElementsByClassName('population');

for (let countryPopulation of populationClassList) {
  let number = parseInt(countryPopulation.textContent.replaceAll(',', ''));
  console.log(number);
  if (number !== NaN) {
    count++;
    total += number;
  }
}

document.querySelector('.total-population').textContent = total.toLocaleString('en-US');
document.querySelector('.average-population').textContent = (total / count).toLocaleString('en-US');
