/* eslint-disable max-len */
'use strict';

function getNumbersFromNodes(nodeList) {
  const numbersArray = [];

  for (const node of nodeList) {
    const number = +node.textContent.split(',').join('');

    numbersArray.push(number);
  }

  return numbersArray;
}

function getTotalAndAverage(numbersArray) {
  const total = numbersArray.reduce((acc, curr) => acc + curr);
  const average = total / numbersArray.length;

  return [total, average];
}

function displayAverageAndTotal() {
  const populationList = document.querySelectorAll('.population');
  const totalPopulationElement = document.querySelector('.total-population');
  const averagePopulationElement = document.querySelector('.average-population');

  const numbersArray = getNumbersFromNodes(populationList);
  const [total, average] = getTotalAndAverage(numbersArray);

  totalPopulationElement.textContent = total.toLocaleString('en-us');
  averagePopulationElement.textContent = average.toLocaleString('en-us');
}

displayAverageAndTotal();
