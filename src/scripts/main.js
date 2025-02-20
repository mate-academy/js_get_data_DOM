'use strict';

const population = document.querySelectorAll('span.population');

const num = [...population].map((n) => Number(n.outerText.replace(/,/g, '')));

const totalPopulation = num.reduce((acc, curr) => acc + curr, 0);
const formattedTotal = totalPopulation.toLocaleString('en-US');

const avaragePopulation = totalPopulation / num.length;
const formattedAvarage = avaragePopulation.toLocaleString('en-US');

const lineOfTotalPopulation = document.querySelector('span.total-population');

lineOfTotalPopulation.textContent = formattedTotal;

const lineOfAvaragePopulation = document.querySelector(
  'span.average-population',
);

lineOfAvaragePopulation.textContent = formattedAvarage;
