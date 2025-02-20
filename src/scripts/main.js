'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const arrOfPopulation = [];

population.forEach((element) => {
  arrOfPopulation.push(Number(element.innerHTML.split(',').join('')));
});

const total = arrOfPopulation.reduce((acc, num) => acc + num, 0);
const average = total / population.length;

const formatNumber = (num) => num.toLocaleString();

totalPopulation.textContent = formatNumber(total);
averagePopulation.textContent = formatNumber(Math.round(average));
