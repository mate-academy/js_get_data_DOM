'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const totalPopulation = Array.from(populationElements).reduce(
  (total, population) => {
    const populationValue = parseInt(population.textContent.replace(/,/g, ''));

    return isNaN(populationValue) ? total : total + populationValue ;
  },
  0,
);

totalPopulationElement.innerHTML = replaceWithCommas(totalPopulation);

averagePopulationElement.innerHTML = replaceWithCommas(
  Math.round(totalPopulation / populationElements.length),
);

function replaceWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
