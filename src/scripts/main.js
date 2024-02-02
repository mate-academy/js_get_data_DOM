'use strict';

// write your code here

const populationElements = document.querySelectorAll('.population');
const populationData = Array.from(
  populationElements).map(element => element.textContent.replace(/,/g, ''));

let total = 0;

populationData.forEach(population => {
  const num = Number(population);

  total += num;
});

const average = total / (populationData.length);

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

averageElement.textContent = average.toLocaleString('en-US');

totalElement.textContent = total.toLocaleString('en-US');
