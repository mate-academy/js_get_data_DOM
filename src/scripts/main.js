'use strict';

const populations = document.querySelectorAll('.population');
let sum = 0;
let count = 0;

populations.forEach((populationSpan) => {
  const populationText = populationSpan.textContent;
  const populationNumber = parseInt(populationText.replace(/,/g, ''));

  if (!isNaN(populationNumber)) {
    sum += populationNumber;
    count++;
  }
});

const average = count > 0 ? sum / count : 0;
const formattedAverage = average.toLocaleString();
const formattedTotal = sum.toLocaleString();

document.querySelector('.average-population').textContent = formattedAverage;
document.querySelector('.total-population').textContent = formattedTotal;
