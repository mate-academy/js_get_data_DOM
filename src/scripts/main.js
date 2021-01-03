'use strict';

// write your code here
const populations = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = populations
  .map(item => Number(item.innerText.replace(/,/g, '')))
  .reduce((acc, current) => acc + current);

const averageValue = totalPopulation / populations.length;

total.textContent = totalPopulation.toLocaleString();
average.textContent = averageValue.toLocaleString();
