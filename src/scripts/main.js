'use strict';

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');
const populationElements = document.querySelectorAll('.population');

const populations = [...populationElements];
const populationsInNumbers = populations.map((country) => {
  const textNumber = country.innerHTML.replaceAll(',', '');

  return Number(textNumber);
});

const total = populationsInNumbers.reduce((acc, number) => acc + number, 0);
const average = total / populations.length;

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
