'use strict';

// write your code here

const population = document.querySelectorAll('.population');
let totalPopulation = 0;

population.forEach(element => {
  const number = parseFloat(element.textContent.replace(/,/g, ''));

  totalPopulation += number;
});

const averagePopulation = totalPopulation / 10;

const total = document.getElementsByClassName('total-population')[0];

total.textContent = totalPopulation.toLocaleString('en-US');

const average = document.getElementsByClassName('average-population')[0];

average.textContent = averagePopulation.toLocaleString('en-US');
