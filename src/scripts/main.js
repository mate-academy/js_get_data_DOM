'use strict';

const populationList = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

function getTotalPopulation() {
  return populationList.reduce((acc, population) => {
    const populationValue = population.textContent;
    const number = +populationValue.split(',').join('');

    return acc + number;
  }, 0);
}

function getAveragePopulation() {
  return Math.round(getTotalPopulation() / populationList.length);
}

function separateByThousands(value) {
  const valueLength = value.length - 1;
  let result = '';

  for (let i = valueLength, count = 0; i >= 0; i--, count++) {
    if (count === 3) {
      result = ',' + result;
      count = 0;
    }
    result = value[i] + result;
  }

  return result;
}

function renderTotalPopulation() {
  const totalPopulationValue = getTotalPopulation().toString();
  const totatPopulationResult = separateByThousands(totalPopulationValue);

  totalPopulation.textContent = totatPopulationResult;
}

function renderAveragePopulation() {
  const averagePopulationValue = getAveragePopulation().toString();
  const averagePopulationResult = separateByThousands(averagePopulationValue);

  averagePopulation.textContent = averagePopulationResult;
}

renderTotalPopulation();
renderAveragePopulation();
