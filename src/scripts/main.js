'use strict';

const populationNodes = [...document.querySelectorAll('.population')];
const totalNode = document.querySelector('.total-population');
const averageNode = document.querySelector('.average-population');

const populationValues = populationNodes.map((node) => {
  const text = node.textContent.replaceAll(',', '');

  return Number(text);
});

const totalPopulation = populationValues.reduce((acc, value) => acc + value, 0);

const avgPopulation = totalPopulation / populationValues.length;

totalNode.textContent = totalPopulation.toLocaleString('en-US');
averageNode.textContent = avgPopulation.toLocaleString('en-US');
