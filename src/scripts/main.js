'use strict';

const allCountryPopulations = [...document.querySelectorAll('.population')]
  .map(countrypopulation => countrypopulation.innerHTML);
const sumOfPopulationValues = allCountryPopulations
  .reduce((accumulator, currentPopulation) => {
    const currentPopulationValue = currentPopulation.split(',').join('');

    return accumulator + +currentPopulationValue;
  }, 0);
const averagePopulation = sumOfPopulationValues / allCountryPopulations.length;
const totalPopulationValue = document.querySelector('.total-population');
const avaragePopulationValue = document.querySelector('.average-population');

totalPopulationValue.innerHTML = sumOfPopulationValues.toLocaleString('en-US');

avaragePopulationValue.innerHTML = averagePopulation.toLocaleString('en-US');
