'use strict';

const populationList = [...document.querySelectorAll('.population')]
  .map(population => +(population.textContent.split(',').join(''))
  );

const total = populationList.reduce((prev, curr) => prev + curr, 0);
const totalNode = document.querySelector('.total-population');

totalNode.textContent = `${total.toLocaleString('en-US')}`;

const average = total / populationList.length;
const averageNode = document.querySelector('.average-population');

averageNode.textContent = `${average.toLocaleString('en-US')}`;
