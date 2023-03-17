'use strict';

// write your code here

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const avarage = document.querySelector('.average-population');

function totalPopulation(collection) {
  const arrayPopulation = [...collection];

  const numbers = arrayPopulation.map(elem => elem.innerHTML);

  const reduced = numbers.reduce((sum, number) =>
    sum + (parseFloat(number.replace(/,/g, ''))), 0);

  return reduced;
}

const populationSum = totalPopulation(population);

const avarageAge = (populationSum / population.length)
  .toLocaleString('en-US');

total.textContent = populationSum.toLocaleString('en-US');
avarage.innerHTML = avarageAge;
