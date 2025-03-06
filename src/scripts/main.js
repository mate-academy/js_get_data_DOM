'use strict';

const populationList = document.querySelectorAll('span.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const calculatePopulation = (population) => {
  let sum = 0;

  population.forEach((item) => {
    const text = item.textContent;
    const transformToNumber = Number(text.replace(/,/g, ''));

    sum += transformToNumber;
  });

  return sum;
};

totalPopulation.textContent =
  calculatePopulation(populationList).toLocaleString();

if (populationList.length !== 0) {
  averagePopulation.textContent = (
    calculatePopulation(populationList) / populationList.length
  ).toLocaleString();
} else {
  averagePopulation.textContent = '0';
}
