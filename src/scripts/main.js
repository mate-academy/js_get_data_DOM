'use strict';

// write your code here

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const avarage = document.querySelector('.average-population');

function totalPopulation(collection) {
  const arrayPopulation = [...collection];
  let sum = 0;

  const numbers = arrayPopulation.map(elem => elem.innerHTML);

  for (const number of numbers) {
    const parsedNumber = parseFloat(number.replace(/,/g, ''));

    sum += parsedNumber;
  }

  return sum;
}

const avarageAge = totalPopulation(population) / population.length;

total.textContent = totalPopulation(population);
avarage.innerHTML = avarageAge;
