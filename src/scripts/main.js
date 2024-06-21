'use strict';

const populationData = [];

document.querySelectorAll('.population').forEach((item) => {
  populationData.push(item.innerHTML);
});

const totalPopulation = populationData.reduce((accumulator, currentValue) => {
  const prepearedItem = Number(currentValue.replace(/[^\w\s]|_/g, ''));

  return accumulator + prepearedItem;
}, 0);
const averagePopulation = Math.floor(totalPopulation / populationData.length);

const totalFormatted = totalPopulation.toLocaleString('en-US');
const averageFormatted = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').innerText = totalFormatted;
document.querySelector('.average-population').innerText = averageFormatted;
