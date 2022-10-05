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

const result = (node, num) => {
  node.innerText = num.toLocaleString('de-DE').split('.').join(',');
};

result(totalPopulation, total);
result(averagePopulation, average);
