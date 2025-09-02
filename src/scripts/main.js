'use strict';

const populationElements = document.querySelectorAll('.population');
const populationData = [];

for (let i = 0; i < populationElements.length; i++) {
  const parsedPopulation = Number(
    populationElements[i].textContent.replace(/,/g, ''),
  );

  populationData.push(parsedPopulation);
}

const totalPopulation = populationData.reduce(
  (populationSum, currentNumber) => {
    return populationSum + currentNumber;
  },
  0,
);

const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = formattedTotalPopulation;

averagePopulationElement.textContent = Math.round(
  totalPopulation / populationData.length,
).toLocaleString('en-US');
