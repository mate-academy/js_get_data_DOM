'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

let total = 0;
let average = 0;

for (const count of population) {
  total += Number(count.innerHTML.split(',').join(''));
  average = total / population.length;
}

totalPopulation.textContent = conversionNumber(total);
avaragePopulation.textContent = conversionNumber(average);

function conversionNumber(value) {
  const arrayThousands = [];
  let number = value;

  while (number > 0) {
    arrayThousands.unshift(number % 1000);
    number = Math.floor(number / 1000);
  }

  return arrayThousands.join(',');
};
