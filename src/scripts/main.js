'use strict';

const allPopulationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

let totalPopulation = 0;

allPopulationElements.forEach((population) => {
  const populationNumber = parseInt(population.textContent.replaceAll(',', ''));

  totalPopulation += populationNumber;
});

totalPopulationElement.textContent = formateNumber(totalPopulation);

averagePopulationElement.textContent = formateNumber(
  Math.round(totalPopulation / allPopulationElements.length),
);

function formateNumber(num) {
  let number = num;
  const numberParts = [];

  for (let i = Math.ceil(String(num).length / 3) - 1; i >= 0; i--) {
    numberParts[i] = number % 1000;
    number = Math.trunc(number / 1000);
  }

  return numberParts.join(',');
}
