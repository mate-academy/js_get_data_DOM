'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = [];

population.forEach(function (x) {
  totalPopulation.push(x.innerText);
});

const numbers = totalPopulation.map((num) => +num.replace(/,/g, ''));

const sumOfPopulation = numbers.reduce((acc, number) => acc + number);

total.textContent = sumOfPopulation.toLocaleString('en-US');

const averageOfPopulation = sumOfPopulation / totalPopulation.length;

average.textContent = averageOfPopulation.toLocaleString('en-US');
