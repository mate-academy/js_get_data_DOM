'use strict';

const values = document.getElementsByClassName('population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

function CalculateTotalPopulation() {
  // eslint-disable-next-line no-shadow
  let total = 0;

  for (const population of values) {
    const textValue = population.textContent.replaceAll(',', '');
    const value = Number(textValue);

    total += value;
  }

  return total;
}

function calculateAveragePopulation(totalValue, populations) {
  const sourceCount = populations.length;

  return totalValue / sourceCount;
}

const total = CalculateTotalPopulation();
const average = calculateAveragePopulation(total, values);

totalPopulation.textContent = total.toLocaleString('en-US');

averagePopulation.textContent = average.toLocaleString('en-US');
