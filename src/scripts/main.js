'use strict';

const populationSpans = document.querySelectorAll('.population');

let totalPopulation = 0;

populationSpans.forEach(populationSpan => {
  const populationValue
    = parseInt(populationSpan.textContent.replace(/,/g, ''));

  if (!isNaN(populationValue)) {
    totalPopulation += populationValue;
  }
});

const averagePopulation = totalPopulation / populationSpans.length;

function addThousandsSeparator(number) {
  return number.toLocaleString('en-Us');
}

const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

totalPopulationSpan.textContent = addThousandsSeparator(totalPopulation);
averagePopulationSpan.textContent = addThousandsSeparator(averagePopulation);
