'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;

populationElements.forEach((element) => {
  const populationText = element.textContent.trim();
  const populationNumber = parseFloat(populationText.replace(/,/g, ''));

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

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
