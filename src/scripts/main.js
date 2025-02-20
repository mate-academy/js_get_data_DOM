'use strict';

const populationCollection = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const total = [...populationCollection].reduce((result, population) => {
  const number = population.innerText.split(',').join('');

  return result + +number;
}, 0);
const average = Math.floor(total / populationCollection.length);

totalElement.innerText = total.toLocaleString('en-US');
averageElement.innerText = average.toLocaleString('en-US');
