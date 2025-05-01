'use strict';

// write your code here
const populationAll = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

populationAll.forEach((item) => {
  total += Number(item.innerHTML.split(',').join(''));
});

const average = total / populationAll.length;

totalPopulation.innerHTML = total.toLocaleString('en');
averagePopulation.innerHTML = average.toLocaleString('en');
