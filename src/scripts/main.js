'use strict';

const populationData = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const newArr = [];

for (const item of populationData) {
  const text = item.innerText;

  newArr.push(+text.split(',').join(''));
}

const total = newArr.reduce((sum, n) => sum + n, 0);

const average = total / newArr.length;

totalPopulation.innerText = total.toLocaleString('en-EN');
averagePopulation.innerText = average.toLocaleString('en-EN');
