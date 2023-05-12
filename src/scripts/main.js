'use strict';

let data = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

data = [...data].map((item) => {
  const population = item.innerText;
  let populationNumber = '';

  for (const ch of population) {
    if (ch !== ',') {
      populationNumber += ch;
    }
  }

  return +populationNumber;
});

let total = data.reduce((a, b) => a + b);
let average = total / data.length;

total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
average = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

totalPopulation.innerText = total;
averagePopulation.innerText = average;
