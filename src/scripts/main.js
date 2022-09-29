'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationValue = [...populations].map(item => (
  +item.textContent.replace(/,/g, '')
));

const total = populationValue.reduce((acc, prev) => acc + prev, 0);
const average = total / populationValue.length;

const separate = value => value.toLocaleString('en');

totalPopulation.innerText = separate(total);
averagePopulation.innerText = separate(average);
