'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const arr = [];

population.forEach(item => {
  arr.push(item.innerText.split(',').join('').split());
});

const total = arr.reduce((prev, current) => +prev + +current, 0);
const average = total / population.length;

const insertResult = (node, num) => {
  node.innerText = num.toLocaleString('de-DE').split('.').join(',');
};

insertResult(totalPopulation, total);
insertResult(averagePopulation, average);
