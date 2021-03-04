'use strict';

const population = document.querySelectorAll('.population');
const values = [...population].map(item => item.innerText);
const valuesToNumbers = values.map(x => +x.split(',').join(''));

const totalPopulation = valuesToNumbers.reduce(
  (populationFirst, populationSecond) => (
    populationFirst + populationSecond
  ), 0
);

const averagePopulation = totalPopulation / valuesToNumbers.length;

const total = document.querySelector('.total');

total.innerText = `Total: ${totalPopulation}`;

const average = document.querySelector('.average');

average.innerText = `Average: ${averagePopulation}`;
