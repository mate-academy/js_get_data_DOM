'use strict';

const populationElements = document.querySelectorAll('.population');

const arr = [];

populationElements.forEach((el) => {
  arr.push(Number(el.innerHTML.split(',').join('')));
});

const total = arr.reduce((acc, i) => acc + i, 0);
const average = total / arr.length;

const formatNumber = (num) => num.toLocaleString();

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = formatNumber(total);
averagePopulation.textContent = formatNumber(Math.round(average));
