'use strict';

// write your code here
const populationCollection = document.querySelectorAll('span.population');

let averageAmount = 0;
let total = 0;

populationCollection.forEach((population) => {
  const data = population.innerHTML.replaceAll(',', '');

  if (+data || +data === 0) {
    averageAmount++;

    total += +data;
  }
});

const average = Math.floor(total / averageAmount);

const averageElement = document.querySelector('span.average-population');
const totalElement = document.querySelector('span.total-population');

averageElement.innerText = average.toLocaleString('en-US');
totalElement.innerText = total.toLocaleString('en-US');
