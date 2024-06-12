'use strict';

const parsePopulation = (text) => Number(text.replace(/,/g, ''));
const container = document.querySelector('.container');
const arrayOfCountryPeople = [...container.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const sum = arrayOfCountryPeople
  .map((pop) => parsePopulation(pop.textContent))
  .reduce((acc, num) => acc + num, 0);

totalPopulation.textContent = sum;
averagePopulation.textContent = sum / arrayOfCountryPeople.length;
