'use strict';

const [...counrties] = document.querySelectorAll('.population');
const counrtiesPopulation = counrties.map(elem => elem.textContent);

const converter = string => Number(string.split(',').join(''));

for (let i = 0; i < counrtiesPopulation.length; i++) {
  counrtiesPopulation[i] = converter(counrtiesPopulation[i]);
}

const counrtiesQuantity = counrtiesPopulation.length;
const topTenPopulation = counrtiesPopulation
  .reduce((acc, currentValue) => acc + currentValue);

const totalCell = document.querySelector('.total-population');
const averageCell = document.querySelector('.average-population');

totalCell.textContent = topTenPopulation.toLocaleString('en-US');

averageCell.textContent = (topTenPopulation / counrtiesQuantity)
  .toLocaleString('en-US');
