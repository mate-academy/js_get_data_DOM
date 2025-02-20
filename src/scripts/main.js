'use strict';

const element = document.getElementsByClassName('population');
let allPopulationNumber = 0;

for (const key of element) {
  allPopulationNumber += +key.innerHTML.replaceAll(',', '');
}

const averagePopulation = allPopulationNumber / element.length;

const formattedPopulation = averagePopulation.toLocaleString('uk-UA');

const classTotalPopulation = document.querySelector('.total-population');

const formattedallPopulationNumber =
  allPopulationNumber.toLocaleString('uk-UA');

classTotalPopulation.innerHTML = formattedallPopulationNumber;

const classAveragePopulation = document.querySelector('.average-population');

classAveragePopulation.innerHTML = formattedPopulation;
