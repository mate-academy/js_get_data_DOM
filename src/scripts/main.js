'use strict';

const allPopulationsList = document.querySelectorAll('.population');
let total = 0;

for (const item of allPopulationsList) {
  const number = Number(item.textContent.replaceAll(',', '').trim());

  total += number;
}

const average = Math.round(total / allPopulationsList.length);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

function separetedStyle(num) {
  const reversed = num.toString().split('').reverse().join('');
  let result = '';

  for (let i = 0; i < reversed.length; i++) {
    result += reversed[i];

    if ((i + 1) % 3 === 0 && i + 1 !== reversed.length) {
      result += ',';
    }
  }

  return result.toString().split('').reverse().join('');
}

totalPopulation.textContent = separetedStyle(total);
averagePopulation.textContent = separetedStyle(average);
