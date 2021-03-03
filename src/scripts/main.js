'use strict';

const population = document.querySelectorAll('.population');

const populationNum = [...population].map(
  item => +item.innerText.replace(/[.,]/g, ''));

const totalPopulation = populationNum.reduce(
  (acc, current) => acc + current, 0
);

const averagePopulation = totalPopulation / population.length;

const total = document.querySelector('.total-population');

total.innerText = totalPopulation;

const average = document.querySelector('.average-population');

average.innerText = averagePopulation;
