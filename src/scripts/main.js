'use strict';

// write your code here
const population = document.querySelectorAll('.population');

let total = 0;

[...population].map(el => {
  total += +(el.outerText.split(',').join(''));
});

const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
