'use strict';

const populationNodes = document.querySelectorAll('.population');
const totalPopulationNode = document.querySelector('.total-population');
const averagePopulationNode = document.querySelector('.average-population');

const populationData = [];

populationNodes.forEach((node) => {
  const populationNumber = Number(node.textContent.replace(/,/g, ''));

  populationData.push(populationNumber);
});

const totalPopulation = populationData.reduce(
  (acc, population) => acc + population,
  0,
);

const averagePopulation = totalPopulation / populationData.length;

totalPopulationNode.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationNode.textContent = averagePopulation.toLocaleString('en-US');
