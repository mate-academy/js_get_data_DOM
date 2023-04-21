'use strict';

// write your code here

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;
let count = 0;

populationList.forEach((population) => {
  const parsedPopulation = parseInt(population.innerText.replace(/,/g, ''), 10);

  if (!isNaN(parsedPopulation)) {
    total += parsedPopulation;
    count++;
  }
});

const average = total / count;

totalPopulation.innerText = total.toLocaleString();
averagePopulation.innerText = average.toLocaleString();
