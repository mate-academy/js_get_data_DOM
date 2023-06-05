'use strict';

const list = document.querySelectorAll('.population');

const population = [];

for (let i = 0; i < list.length; i++) {
  population.push(list[i].innerHTML.replaceAll(',', ''));
}

const total = population.reduce(function(sum, current) {
  return sum + Number(current);
}, 0);

const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
