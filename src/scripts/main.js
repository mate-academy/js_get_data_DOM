'use strict';

// write your code here
const populationList = [...document.querySelectorAll('.population')]
  .map(population => +(population.textContent.split(',').join(''))
  );

const totalResult = populationList.reduce((prev, cur) => prev + cur, 0);
const averageResult = totalResult / populationList.length;

const totalNode = document.querySelector('.total-population');
const averageNode = document.querySelector('.average-population');

totalNode.textContent = `${totalResult.toLocaleString('en-US')}`;
averageNode.textContent = `${averageResult.toLocaleString('en-US')}`;
