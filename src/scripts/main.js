'use strict';

const populationArr = [...document.querySelectorAll('span.population')];
const populationNumbers = [];

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

populationArr.forEach((el) => {
  const populationText = el.textContent;
  const populationNumber = parseInt(populationText.split(',').join(''));

  if (!isNaN(populationNumber)) {
    populationNumbers.push(populationNumber);
  }
});

const totalNumber = populationNumbers.reduce((sum, el) => sum + el, 0);
const averageNumber = totalNumber / populationNumbers.length;

totalPopulation.textContent = totalNumber.toLocaleString('en-US', {
  maximumFractionDigits: 0,
});

averagePopulation.textContent = averageNumber.toLocaleString('en-US', {
  maximumFractionDigits: 0,
});
