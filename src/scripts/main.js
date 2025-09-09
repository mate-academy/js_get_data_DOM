'use strict';

const allPopulation = [...document.querySelectorAll('span.population')];
const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');
const numberOfPeople = allPopulation.map((elem) => {
  return parseInt(elem.textContent.replaceAll(/,/g, ''));
});

const totalValue = numberOfPeople.reduce((previousvalue, num) => {
  return previousvalue + num;
}, 0);

const average = totalValue / numberOfPeople.length;

totalPopulation.textContent = totalValue.toLocaleString('en-US');
averagePopulation.textContent = Math.round(average).toLocaleString('en-US');
