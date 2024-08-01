'use strict';

const population = document.querySelectorAll('.population');

const totalPopulation = [];

population.forEach(function (p) {
  totalPopulation.push(p.innerText);
});

const numbers = totalPopulation.map((num) => +num.replace(/,/g, ''));

const sumOfPopulation = numbers.reduce((acc, number) => acc + number);

const total = document.querySelector('.total-population');

total.textContent = sumOfPopulation.toLocaleString('en-US');

const averageOfPopulation = sumOfPopulation / totalPopulation.length;

const average = document.querySelector('.average-population');

average.textContent = averageOfPopulation.toLocaleString('en-US');
