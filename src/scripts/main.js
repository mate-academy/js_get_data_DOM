'use strict';

const populationElements = document.querySelectorAll('.population');
const populationData = [];
const firstValidPopulationElement = document.querySelector('.population');
const textOfValidElement = firstValidPopulationElement.textContent.trim();
let delimiter = '';

for (let i = 0; i < textOfValidElement.length; i++) {
  const char = textOfValidElement[i];

  if (char < '0' || char > '9') {
    delimiter = char;
    break;
  }
}

for (let i = 0; i < populationElements.length; i++) {
  const parsedPopulation = Number(
    populationElements[i].textContent.replaceAll(delimiter, ''),
  );

  if (!Number.isFinite(parsedPopulation)) {
    continue;
  } else {
    populationData.push(parsedPopulation);
  }
}

const totalPopulation = populationData.reduce(
  (populationSum, currentNumber) => {
    return populationSum + currentNumber;
  },
  0,
);

function formatWithSeparator(num, separator) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

if (populationData.length !== 0) {
  const formatTotalPopulation = formatWithSeparator(totalPopulation, delimiter);
  const totalPopulationElement = document.querySelector('.total-population');
  const averagePopulationElement = document.querySelector(
    '.average-population',
  );

  totalPopulationElement.textContent = formatTotalPopulation;

  averagePopulationElement.textContent = formatWithSeparator(
    Math.round(totalPopulation / populationData.length),
    delimiter,
  );
}
