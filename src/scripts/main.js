'use strict';

// write your code here
const population = document.querySelectorAll('.population');

const total = [...population].reduce((a, b) => {
  return a + Number(b.outerText.split(',').join(''));
}, 0);

const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
