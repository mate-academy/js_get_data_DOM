'use strict';

function thousandsSeparator(number) {
  const numberStringified = String(number);
  const numberParts = [];
  let currentEnd = numberStringified.length % 3
    ? numberStringified.length % 3 : 3;
  let currentStart = 0;

  while (currentStart <= numberStringified.length - 3) {
    numberParts.push(numberStringified.slice(currentStart, currentEnd));
    currentStart = currentEnd;
    currentEnd += 3;
  }

  return numberParts.join(',');
}

const populationAmounts = document.querySelectorAll('.population');
const totalPopulationAmount = document.querySelector('.total');
const averagePopulationAmount = document.querySelector('.average');

let populationAmountSum = 0;

populationAmounts.forEach(populationAmount => {
  populationAmountSum += Number(populationAmount.textContent
    .split(',').join(''));
});

totalPopulationAmount.textContent
= `Total: ${thousandsSeparator(populationAmountSum)}`;

averagePopulationAmount.textContent
  = `Average: ${thousandsSeparator(populationAmountSum
  / populationAmounts.length)}`;
