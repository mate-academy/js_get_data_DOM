'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;

population.forEach(item => {
  total += +item.innerHTML.split(',').join('');
});

const average = total / population.length;

totalPopulation.textContent = total.toLocaleString('en');
averagePopulation.textContent = average.toLocaleString('en');
