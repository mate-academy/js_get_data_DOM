'use strict';

function calculateSum(populationArrayOfValues) {
  return populationArrayOfValues.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
}

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total');
const averagePopulation = document.querySelector('.average');

const populationValues = [...population].map((x) => {
  return +x.innerText.replace(/,/gi, '');
});

averagePopulation.innerText = (
  calculateSum(populationValues) / populationValues.length)
  .toLocaleString('en');

totalPopulation.innerText = calculateSum(populationValues).toLocaleString('en');
