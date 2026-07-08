'use strict';

// write your code here
const population = document.getElementsByClassName('population');
const arrPopulation = [];

for (const value of population) {
  const num = value.textContent.split(',').join('');

  arrPopulation.push(+num);
}

const total = arrPopulation.reduce((acc, current) => acc + current, 0);

const strTotal = String(total).split('').reverse().join('');
let resultTotal = '';

for (let i = 0; i < strTotal.length; i += 3) {
  resultTotal += strTotal.slice(i, i + 3);

  if (i + 3 < strTotal.length) {
    resultTotal += ',';
  }
}

const average = Math.round(total / arrPopulation.length);

const strAvr = String(average).split('').reverse().join('');
let resultAverage = '';

for (let i = 0; i < strAvr.length; i += 3) {
  resultAverage += strAvr.slice(i, i + 3);

  if (i + 3 < strAvr.length) {
    resultAverage += ',';
  }
}

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = resultTotal.split('').reverse().join('');
averagePopulation.textContent = resultAverage.split('').reverse().join('');
