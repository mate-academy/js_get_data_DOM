'use strict';

const population = document.querySelectorAll('.population');
const populationLength = Object.keys(population).length;
console.log(population);
let sum = 0;

for (let p of population) {
  const populationTextContent = p.textContent;
  const numbers = populationTextContent.split('');
  let populationNumber = '';

  for (const n of numbers) {
    if (n !== ',') {
      populationNumber += n;
    }
  }
  
  sum += Number(populationNumber);
};

const textTotal = document.querySelector('.total-population');

const sumThousands = sum.toLocaleString('en-US');
textTotal.textContent = `${sumThousands}`;

const average = Math.floor(sum / populationLength).toLocaleString('en-US');
const textAverage = document.querySelector('.average-population');
textAverage.textContent = `${average};`

