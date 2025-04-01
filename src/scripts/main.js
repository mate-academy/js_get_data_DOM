'use strict';

const spans = [...document.querySelectorAll('.population')];
const populationValues = spans.map((value) => {
  let number = parseInt(value.textContent.replace(/,/g, ''), 10);

  if (isNaN(number)) {
    number = 0;
  }

  return number;
});

const totalPopulation = populationValues.reduce((prevValue, value) => {
  return prevValue + value;
}, 0);
const avaragePopulation = Math.floor(totalPopulation / populationValues.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-Us');

document.querySelector('.average-population').textContent =
  avaragePopulation.toLocaleString('en-Us');
