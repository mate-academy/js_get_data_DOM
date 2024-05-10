'use strict';

const populationCollection = document.querySelectorAll('.population');
const populationArray = [...populationCollection];

let total = 0;

populationArray.forEach((population) => {
  const populationText = population.textContent.replace(/,/g, '');
  const populationNumber = parseInt(populationText);

  total += populationNumber;
});

const average = total / populationArray.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = total.toLocaleString('en-US');
averageSpan.textContent = average.toLocaleString('en-US');
