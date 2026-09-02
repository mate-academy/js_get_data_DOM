'use strict';

const allNodes = document.querySelectorAll('.population');
const clearArr = Array.from(allNodes)
  .map((node) => node.textContent)
  .map((ch) => Number(ch.replaceAll(',', '')))
  .filter((symb) => !isNaN(symb));

const totalPopulation = clearArr.reduce((acc, num) => {
  return acc + num;
}, 0);

const averagePopulation = Math.round(totalPopulation / clearArr.length);

const totalElement = document.querySelector('.total-population');
const averegeElement = document.querySelector('.average-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US');
averegeElement.textContent = averagePopulation.toLocaleString('en-US');
