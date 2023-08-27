'use strict';

const allPopulations = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const textPopulation = [...allPopulations].map(numb => numb.textContent);

const numberPopulation = textPopulation.map(n => {
  const nb = n.split(',').join('');

  return parseInt(nb);
});

const total = numberPopulation.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

const average = total / numberPopulation.length;

const averageString = average.toLocaleString('en-US');
const totalString = total.toLocaleString('en-US');

averagePopulation.textContent = averageString;
totalPopulation.textContent = totalString;
