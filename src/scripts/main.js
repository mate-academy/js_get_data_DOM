'use strict';

// write your code here

const average = document.querySelector('.average-population');

let totalPopulation = 0;

allPopulations.forEach(element => {
  totalPopulation += parseInt(element.innerText.split(',').join(''));
});

total.textContent = totalPopulation.toLocaleString('en-US');

average.textContent = (totalPopulation / allPopulations.length).toLocaleString('en-US');
average.textContent = (totalPopulation / allPopulations.length)
  .toLocaleString('en-US');