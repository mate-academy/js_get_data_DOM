/* eslint-disable max-len */
'use strict';

function getTotal(nodeList) {
  let total = 0;

  for (const node of nodeList) {
    const number = +node.textContent.split(',').join('');

    total += number;
  }

  return total;
}

function displayAverageAndTotal() {
  const populationList = document.querySelectorAll('.population');
  const totalPopulationElement = document.querySelector('.total-population');
  const averagePopulationElement = document.querySelector('.average-population');

  const total = getTotal(populationList);
  const average = total / populationList.length;

  totalPopulationElement.textContent = total.toLocaleString('en-us');
  averagePopulationElement.textContent = average.toLocaleString('en-us');
}

displayAverageAndTotal();
