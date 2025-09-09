'use strict';

const allPopulation = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const numberOfPeople = allPopulation.map((elem) => {
  return Number(elem.textContent.replaceAll(',', ''));
});

const totalValue = numberOfPeople.reduce((previousvalue, num) => {
  return previousvalue + num;
}, 0);

const average = totalValue / numberOfPeople.length;

totalPopulation.textContent = totalValue.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
