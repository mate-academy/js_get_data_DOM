'use strict';

const values = document.getElementsByClassName('population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

function CalculateTotalPopulation() {
  // eslint-disable-next-line no-shadow
  let total = 0;
  let sourceCount = 0;

  for (const population of values) {
    const textValue = population.textContent.replaceAll(',', '');
    const value = Number(textValue);

    if (!isNaN(value)) {
      total += value;
      sourceCount += 1;
    }
  }

  return { total, sourceCount };
}

function calculateAveragePopulation(totalValue, sourceCount) {
  return Math.round(totalValue / sourceCount);
}

const total = CalculateTotalPopulation();
const average = calculateAveragePopulation(total.total, total.sourceCount);

totalPopulation.textContent = total.total.toLocaleString('en-US');

averagePopulation.textContent = average.toLocaleString('en-US');
