'use strict';

const people = document.querySelectorAll('span.population');
const numbersArray = [...numbers].map(number =>
  +number.innerText.replaceAll(',', ''));
const total = document.querySelector('span.total-population');
const average = document.querySelector('span.average-population');
const totalPopulation = numbersArray.reduce(
  (sum, currentNum) => sum + currentNum, 0
);
const averagePopulation = Math.round(totalPopulation / numbersArray.length);

total.innerHTML = `${totalPopulation.toLocaleString('en-US')}`;
average.innerText = `${averagePopulation.toLocaleString('en-US')}`;

