'use strict';

const inputData = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;

for (const data of inputData) {
  const numericData = Number((data.innerHTML).replaceAll(',', ''));

  total += numericData;
}

const average = new Intl.NumberFormat().format(total / inputData.length);

total = new Intl.NumberFormat().format(total);
totalPopulation.innerHTML = total;
averagePopulation.innerHTML = average;
