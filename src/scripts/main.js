'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;

populationElements.forEach((element) => {
  const populationString = element.textContent.replace(/,/g, '');
  const populationNumber = parseFloat(populationString);

  if (!isNaN(populationNumber)) {
    totalPopulation += populationNumber;
  }
});

const averagePopulation = totalPopulation / populationElements.length;

const formattedTotalPopulation = numberWithCommas(totalPopulation);
const formattedAveragePopulation = numberWithCommas(averagePopulation);

document.querySelector('.total-population')
  .textContent = formattedTotalPopulation;

document.querySelector('.average-population')
  .textContent = formattedAveragePopulation;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
