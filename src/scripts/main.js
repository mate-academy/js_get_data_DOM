'use strict';

let sum = 0;

const population = document.querySelectorAll('.population');
const populationArray = [...population].map(item => item.innerHTML);

for (const element of populationArray) {
  const item = Number(element.split(',').join(''));

  sum += item;
}

const total = sum.toLocaleString('en-US');
const average = (sum / populationArray.length).toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = `${total}`;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = `${average}`;
