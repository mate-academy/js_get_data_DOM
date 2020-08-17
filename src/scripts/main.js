'use strict';

// write your code here
const population = document.getElementsByClassName('population');

let sum = 0;

for (let i = 0; i < population.length; i++) {
  sum += Number(population[i].textContent.replace(/,/g, ''));
}

function addComma(number) {
  const number2 = String(number);
  const splitNumber = number2.split('');

  for (let y = splitNumber.length % 3; y < splitNumber.length; y = y + 3) {
    splitNumber[y - 1] = splitNumber[y - 1] + ',';
  }

  const finalNumber = splitNumber.join('');

  return finalNumber;
}

const totalPopulation = document.getElementsByClassName('total-population');

totalPopulation[0].textContent = addComma(sum);

const averagePopulation = document.getElementsByClassName('average-population');
const averageSum = sum / population.length;

averagePopulation[0].textContent = addComma(averageSum);
