'use strict';

let total = 0;

const totalPeople = (num) => {
  total += num;
};

const spanPopulation = document.querySelectorAll('.population');

spanPopulation.forEach(popul => {
  const numberOfPeople = Number(popul.textContent.split(',').join(''));

  totalPeople(numberOfPeople);
});

const average = total / spanPopulation.length;

const spanAverage = document.querySelector(`.average-population`);
const totalAverage = document.querySelector(`.total-population`);

const population = spanAverage.textContent = average.toLocaleString('en-US');
const totalPopulation
= totalAverage.textContent = total.toLocaleString('en-US');

population.textContent = spanAverage;
totalPopulation.textContent = totalAverage;
