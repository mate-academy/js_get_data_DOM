'use strict';

const populationList = [...document.body.querySelectorAll('.population')].map(
  population => Number(population.textContent.split(',').join(''))
);

const total = populationList.reduce((prev, current) => prev + current, 0);
const totalNode = document.querySelector('.total');

totalNode.textContent = `Total: ${total.toLocaleString('en-US')}`;

const average = total / populationList.length;
const avgNode = document.querySelector('.average');

avgNode.textContent = `Average: ${average.toLocaleString('en-US')}`;
