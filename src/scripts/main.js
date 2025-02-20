'use strict';

const population = document.querySelectorAll(`span.population`);
const populationList = [...population].map((element) => {
  return parseInt(element.textContent.replace(/[^0-9.-]+/g, ''));
});

const totalPopulationElement = document.querySelector('span.total-population');
const totalPopulationAmount = getTotalAmountPopulation(populationList);

totalPopulationElement.innerHTML = convertAmountWithThousandsSeparator(
  totalPopulationAmount,
);

const averagePopulationElement = document.querySelector(
  'span.average-population',
);

const averagePopulationAmount =
  getTotalAmountPopulation(populationList) / populationList.length;

averagePopulationElement.innerHTML = convertAmountWithThousandsSeparator(
  averagePopulationAmount,
);

function getTotalAmountPopulation(list) {
  return list.reduce((acc, curr) => acc + curr, 0);
}

function convertAmountWithThousandsSeparator(value) {
  return value.toLocaleString('en-US');
}
