'use strict';

const populationArray = document.querySelectorAll('.population');

let totalAmount = 0;

populationArray.forEach((number) => {
  let amount = number.textContent.split(',').join('');

  amount = parseInt(amount);

  if (Number.isFinite(amount)) {
    totalAmount += amount;
  }
});

const averageAmount = totalAmount / populationArray.length;

const formattedTotal = totalAmount.toLocaleString('en-US');
const formattedAverage = averageAmount.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
