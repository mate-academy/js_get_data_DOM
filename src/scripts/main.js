'use strict';

function formatNumber(num) {
  return num.toLocaleString();
}

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;
let count = 0;

populationElements.forEach((element) => {
  const populationText = element.textContent.replace(/,/g, '');
  const populationNumber = parseInt(populationText, 10);

  if (!isNaN(populationNumber)) {
    totalPopulation += populationNumber;
    count += 1;
  }
});

const averagePopulation = count > 0 ? totalPopulation / count : 0;

const formattedTotal = formatNumber(totalPopulation);
const formattedAverage = formatNumber(averagePopulation);

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
