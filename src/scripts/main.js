'use strict';

const population = document.querySelectorAll('.population');
const populationArray = [];

population.forEach(string => {
  const text = string.textContent;
  const commasRemoved = text.replaceAll(',', '');
  const number = parseInt(commasRemoved);

  populationArray.push(number);
});

function calculateTotal(array) {
  return array
    .reduce((acc, item) => acc + item, 0)
    .toLocaleString();
}

function calculateAverage(array) {
  const averagePopulation = array
    .reduce((acc, item) => acc + item, 0) / (populationArray.length - 1);

  return parseInt(averagePopulation).toLocaleString();
}

const total = calculateTotal(populationArray);
const average = calculateAverage(populationArray);

document.querySelector('.total-population').innerHTML = total;
document.querySelector('.average-population').innerHTML = average;
