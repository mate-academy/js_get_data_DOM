'use strict';

const populationElements = document.querySelectorAll('.population');
const populationInfo = [];

populationElements.forEach((element) => {
  const text = element.textContent;

  populationInfo.push(parseInt(text.replace(/,/g, '')));
});

const total = populationInfo.reduce(
  (prevPopulation, currPopulation) => prevPopulation + currPopulation,
  0,
);
const average = total / populationInfo.length;

const spanTotal = document.querySelector('.total-population');
const spanAverage = document.querySelector('.average-population');

spanTotal.textContent = total.toLocaleString('en-US');
spanAverage.textContent = `${average.toLocaleString('en-US')}`;
