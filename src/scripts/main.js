'use strict';

// write your code here
function calculatePopulation() {
  const elementsList = document.querySelectorAll('.population');

  const result = {
    total: 0,
    count: 0,

    get avg() {
      return this.count > 0 ? this.total / this.count : 0;
    },
  };

  elementsList.forEach(element => {
    const number = parseInt(element.textContent.split(',').join(''));

    if (!isNaN(number)) {
      result.total += number;
      result.count++;
    }
  });

  return result;
}

function addTotalPopulation(totalPopulation) {
  const element = document.querySelector('.total-population');
  const text = totalPopulation.toLocaleString('en-US');

  element.innerHTML = text;
}

function addAveragePopulation(averagePopulation) {
  const element = document.querySelector('.average-population');
  const text = averagePopulation.toLocaleString('en-US');

  element.innerHTML = text;
}

const populationData = calculatePopulation();

addTotalPopulation(populationData.total);
addAveragePopulation(populationData.avg);
