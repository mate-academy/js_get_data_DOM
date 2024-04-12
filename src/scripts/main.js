'use strict';

const populationCount = document.querySelectorAll('span.population');
const averagePopulation = document.querySelector('span.average-population');
const totalPopulation = document.querySelector('span.total-population');

function removeCommas(string) {
  return string.replace(/,/g, '');
}

function getTotalPopulation() {
  let total = 0;

  populationCount.forEach((span) => {
    total += parseInt(removeCommas(span.textContent.trim(), 10));
  });

  return total.toLocaleString('en-US');
}

function getAveragePopulation() {
  const total = +removeCommas(getTotalPopulation());
  const count = populationCount.length;

  if (count === 0) {
    return 0;
  }

  const averageCount = total / count;

  return averageCount.toLocaleString('en-US');
}

totalPopulation.textContent = getTotalPopulation();
averagePopulation.textContent = getAveragePopulation();
