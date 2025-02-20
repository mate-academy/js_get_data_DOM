'use strict';

const nodeList = document.querySelectorAll('.population');
let totalPopulation = 0;

for (const node of nodeList) {
  totalPopulation += Number(node.textContent.split(',').join(''));
}

const averagePopulation = totalPopulation / nodeList.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
