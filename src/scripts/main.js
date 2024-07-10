'use strict';

const populationElements = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const populationContent = populationElements.map((el) => {
  const populationText = el.innerText;
  const populationNumber = Number(populationText.split(',').join(''));

  return populationNumber;
});

const populationCount = populationContent.length;

const totalPopulation = populationContent.reduce((prev, num) => prev + num, 0);
const averagePopulation = totalPopulation / populationCount;

totalPopulationElement.innerText = totalPopulation.toLocaleString('en-US');
averagePopulationElement.innerText = averagePopulation.toLocaleString('en-US');
