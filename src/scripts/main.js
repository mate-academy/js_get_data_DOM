'use strict';

const populationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const populationNumberList = [...populationElements]
  .map(population => {
    const populationNumber = +population.textContent
      .split(',')
      .join('');

    return populationNumber;
  });

const totalPopulation = populationNumberList
  .reduce((acc, curr) => acc + curr);
const totalPopulationString = (totalPopulation + '')
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const averagePopulation = totalPopulation / populationNumberList.length;
const averagePopulationString = (averagePopulation + '')
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

totalPopulationElement.textContent = totalPopulationString;
averagePopulationElement.textContent = averagePopulationString;
