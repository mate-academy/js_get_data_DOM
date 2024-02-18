'use strict';

const population = document.querySelectorAll(".population");
const populationArray = [...population].map(
  (element) => +element.innerText.split(',').join('')
);

const sumElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const sum = populationArray.reduce((acc, curr) => acc + curr, 0);
const avg = sum / populationArray.length;

sumElement.textContent = sum.toLocaleString('en-US');
averageElement.textContent = avg.toLocaleString('en-US');

