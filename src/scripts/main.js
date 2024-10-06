'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;
let average = 0;

for (const population of populations) {
  total += +population.textContent.split(',').join('');
}

average = total / populations.length;

function separator(number) {
  const editNumber = String(number).split('').reverse();
  let newNumber = '';

  for (let i = 0; i < editNumber.length; i++) {
    if (Number.isInteger(i / 3) && i !== 0) {
      newNumber += ',';
    }
    newNumber += editNumber[i];
  }

  newNumber = newNumber.split('').reverse().join('');

  return newNumber;
}

average = String(average).split('.');

totalPopulation.textContent = separator(total);
averagePopulation.textContent = `${separator(average[0])}.${average[1]}`;
