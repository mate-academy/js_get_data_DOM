'use strict';

// write your code here
const populationNodes = [...document.querySelectorAll('.population')];
const totalPopulationNode = document.querySelector('.total-population');
const avgPopulationNode = document.querySelector('.average-population');

const total = populationNodes
  .map((node) => Number(node.textContent.replace(/,/g, '')))
  .reduce((prev, curr) => prev + curr, 0);
const avg = total / populationNodes.length;

totalPopulationNode.textContent = total.toLocaleString('en-US');
avgPopulationNode.textContent = avg.toLocaleString('en-US');
