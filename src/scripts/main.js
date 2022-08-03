'use strict';

const allPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;
let count = 0;

for (const country of [...allPopulation]) {
  total += +country.textContent.split(',').join('');
  count++;
}

function needFormat(number) {
  let numberStr = number.toString();
  const numberArr = [];

  while (numberStr.length > 0) {
    numberArr.unshift(numberStr.slice(-3, numberStr.length));
    numberStr = numberStr.slice(0, -3);
  }

  return numberArr.join(',');
};

totalPopulation.innerHTML = needFormat(total);
averagePopulation.innerHTML = needFormat(total / count);
