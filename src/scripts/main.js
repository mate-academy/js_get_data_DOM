'use strict';

const popCol = document.querySelectorAll('.population');
const popNum = [...popCol].map((i) => +i.textContent.split(',').join(''));

function calculateTotal(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
}

function calculateAverage(arr) {
  return calculateTotal(arr) / arr.length;
}

const total = calculateTotal(popNum);
const average = calculateAverage(popNum);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = total.toLocaleString('en-EN');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = Math.round(average).toLocaleString('en-EN');
