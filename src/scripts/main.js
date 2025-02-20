'use strict';

const separateThousands = (number) => number.toLocaleString('en-Us');
const populationAmounts = document.querySelectorAll('.population');
const totalPopulationAmount = document.querySelector('.total');
const averagePopulationAmount = document.querySelector('.average');

let populationAmountSum = 0;

populationAmounts.forEach(populationAmount => {
  populationAmountSum += Number(populationAmount.textContent
    .split(',').join(''));
});

totalPopulationAmount.textContent
= `Total: ${separateThousands(populationAmountSum)}`;

averagePopulationAmount.textContent
  = `Average: ${separateThousands(populationAmountSum
  / populationAmounts.length)}`;
