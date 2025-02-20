'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationArray = [...population].map(el => {
  const text = el.innerText;

  return Number(text.split(',').join(''));
});

function calculateTotal(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

function calculateAverage(array) {
  return calculateTotal(array) / array.length;
}

totalPopulation.textContent = calculateTotal(populationArray)
  .toLocaleString('en-US');

averagePopulation.textContent = calculateAverage(populationArray)
  .toLocaleString('en-US');
