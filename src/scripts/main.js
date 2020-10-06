'use strict';

const population = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const totalPopulation = [...population].reduce((sum, country) =>
  sum + Number(country.innerHTML.split(',').join('')), 0);

const averagePopulation = totalPopulation / population.length;

function formatNumber(number) {
  const numberSplited = [...number.toString()];

  for (let i = numberSplited.length - 3; i > 0; i -= 3) {
    numberSplited.splice(i, 0, ',');
  }

  return numberSplited.join('');
}

totalPopulationElement.innerHTML = formatNumber(totalPopulation);
averagePopulationElement.innerHTML = formatNumber(averagePopulation);
