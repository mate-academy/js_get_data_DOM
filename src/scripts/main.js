'use strict';

const populationSpans = document.querySelectorAll('.population');

let totalPopulation = 0;
let count = 0;

populationSpans.forEach((span) => {
  const populationText = span.textContent;

  const populationNumber = Number(populationText.split(',').join(''));

  if (!isNaN(populationNumber)) {
    totalPopulation += populationNumber;
    count++;
  }
});

const averagePopulation = count > 0 ? totalPopulation / count : 0;

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

if (averageSpan) {
  averageSpan.textContent = averagePopulation.toLocaleString('en-US');
}

if (totalSpan) {
  totalSpan.textContent = totalPopulation.toLocaleString('en-US');
}
