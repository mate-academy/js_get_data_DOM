'use strict';

const allPopulations = document.querySelectorAll('.population');

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');

let totalPopulation = 0;

allPopulations.forEach(element => {
  totalPopulation += parseInt(element.innerText.split(',').join(''));
});

total.textContent = totalPopulation.toLocaleString('en-US');

average.textContent = (totalPopulation / allPopulations.length)
  .toLocaleString('en-US');
// write your code here
