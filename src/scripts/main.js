'use strict';

const populationSpan = document.querySelectorAll('span.population');
const totalPopulation = document.querySelectorAll('span.total-population');
const averagePopulation = document.querySelectorAll('span.average-population');

let numberOfPopulation = 0;

populationSpan.forEach = (span) => {
  numberOfPopulation += Number(span.textContent.replaceAll(',', ''));
};

const averagePeople = numberOfPopulation / populationSpan.length;

totalPopulation.textContent = numberOfPopulation.toLocaleString('en-US');
averagePopulation.textContent = averagePeople.toLocaleString('en-US');
