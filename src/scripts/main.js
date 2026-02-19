'use strict';

const spanPopulation = [...document.querySelectorAll('.population')];
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');
const total = spanPopulation.reduce(
  (sum, n) => sum + Number(n.innerHTML.split(',').join('')),
  0,
);
const average = Math.round(total / spanPopulation.length);

function convertNumbers(number) {
  const resultNumber = [];
  const numberToString = String(number);

  for (let i = numberToString.length; i > 0; i -= 3) {
    if (i < 3) {
      resultNumber.unshift(numberToString.slice(0, i));

      break;
    }
    resultNumber.unshift(numberToString.slice(i - 3, i));
  }

  return resultNumber.join(',');
}

averagePopulation.textContent = convertNumbers(average);
totalPopulation.textContent = convertNumbers(total);
