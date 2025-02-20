'use strict';

const populationElements = document.querySelectorAll('.population');
const avarageCalculates = document.querySelector('.average-population');
const totalCalculates = document.querySelector('.total-population');
let totalPopulation = 0;
const population = [];

populationElements.forEach((element) => {
  const populationString = element.textContent
    .split('')
    .map((el) => {
      if (el === ',') {
        return '';
      }

      return el;
    })
    .join('');

  const populationNumber = +populationString;

  if (typeof populationNumber === 'number') {
    population.push(populationNumber);
    totalPopulation += populationNumber;
  }
});

function formationNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const avarageTotal = Math.round(totalPopulation / population.length);

avarageCalculates.textContent = formationNumber(avarageTotal);
totalCalculates.textContent = formationNumber(totalPopulation);
