'use strict';

const population = document.querySelectorAll('span.population');

const populationData = Array.from(population).map((el) => el.textContent);

const numbers = populationData.map((number) => convertStringIntoNumber(number));

const totalPopulation = getTotalPopulation(numbers);

const averagePopulation = getAveragePopulation(totalPopulation, numbers);

function formatNumber(value) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
    value,
  );
}

function convertStringIntoNumber(value) {
  return +value.replace(/[^0-9]/g, '');
}

function getTotalPopulation(value) {
  return value.reduce((a, b) => a + b, 0);
}

function getAveragePopulation(value, values) {
  return value / values.length;
}

function replacePopulation() {
  const total = document.querySelector('.total-population');
  const average = document.querySelector('.average-population');

  const totalResult = formatNumber(totalPopulation);
  const averageResult = formatNumber(averagePopulation);

  if (total) {
    total.textContent = totalResult;
  }

  if (average) {
    average.textContent = averageResult;
  }
}

replacePopulation();
