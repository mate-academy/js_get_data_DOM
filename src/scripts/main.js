'use strict';

const populationClasses = document.querySelectorAll('.population');
const populationTextsArr = [...populationClasses].map(populationClass =>
  populationClass.innerText);

const totalCount = populationTextsArr.reduce((sum, text) => {
  return sum + (+text.split(',').join(''));
}, 0);

const averageNumber = totalCount / populationClasses.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = totalCount.toLocaleString('en-US');
averagePopulation.innerText = averageNumber.toLocaleString('en-US');
