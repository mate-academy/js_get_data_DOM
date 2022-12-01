'use strict';

// write your code here

const populationNodes = document.querySelectorAll('.population');
const data = [];

for (const node of populationNodes) {
  data.push(Number.parseInt(node.textContent.replace(/,/g, '')));
}

const totalPopulation = data.reduce((total, curr) => total + curr, 0);
const average = totalPopulation / data.length;

function formatNumber(number, separator = ',') {
  return number.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, separator
  );
}

const totalElement = document.querySelector('.total-population');

totalElement.textContent = formatNumber(totalPopulation);

const averageElement = document.querySelector('.average-population');

averageElement.textContent = formatNumber(average);
