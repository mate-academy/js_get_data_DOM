'use strict';

// write your code here
const populationNodes = [...document.querySelectorAll('.population')];
const population = populationNodes.map(el => +el.textContent.replace(/,/g, ''));

const totalPopulation = population.reduce((acc, cur) => acc + cur, 0);
const averagePopulation = totalPopulation / population.length;

const totalNode = document.querySelector('.total-population');
const avarageNode = document.querySelector('.average-population');

const formatNum = num => num.toLocaleString('en');

totalNode.textContent = formatNum(totalPopulation);
avarageNode.textContent = formatNum(averagePopulation);
