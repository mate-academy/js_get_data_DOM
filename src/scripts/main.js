'use strict';

// write your code here
const populationes = [...document.querySelectorAll('.population')];

let total = 0;

for (const population of populationes) {
  const num = population.innerText.split('');
  let n = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] === ',') {
      continue;
    }

    n.push(num[i]);
  }
  n = n.join('');

  total += Number(n);
}

const average = Math.round(total / populationes.length);

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = formattedTotal;
averagePopulation.innerText = formattedAverage;
