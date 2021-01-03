'use strict';

const population = document.querySelectorAll('.population');

const populationArr = [...population].map(
  item => parseInt(item.innerHTML.split(',').join('')));

const total = populationArr.reduce((prev, current) => {
  return prev + current;
});

const average = total / populationArr.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = total;
averagePopulation.innerHTML = average;
