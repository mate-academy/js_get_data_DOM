'use strict';

const populationData = Array.from(document.querySelectorAll('.population'));
const getAllPopulation = (populationElements) => {
  return populationElements.map((population) => {
    const isNumber = parseInt(population.textContent.replace(/,/g, ''));

    if (isNaN(isNumber)) {
      return 0;
    }

    return isNumber;
  });
};

const allPopulation = getAllPopulation(populationData);

const totalPopulation = allPopulation.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = totalPopulation / allPopulation.length;

const getTotalElement = document.querySelector('.total-population');
const getAvarageElement = document.querySelector('.average-population');

getTotalElement.textContent = totalPopulation.toLocaleString();
getAvarageElement.textContent = averagePopulation.toLocaleString();
