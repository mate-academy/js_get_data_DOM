'use strict';

const populationElements = document.querySelectorAll('.population');
const populationArray = Array.from(populationElements);
const populationText = populationArray.map((element) => element.textContent);
const cleanedPopulations = populationText.map((el) => el.replace(/,/g, ''));
const populationNumber = cleanedPopulations.map((num) => Number(num));

const totalPopulation = populationNumber.reduce((sum, num) => sum + num, 0);

const averagePopulation = totalPopulation / populationNumber.length;

const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

totalEl.textContent = totalPopulation.toLocaleString();
averageEl.textContent = Math.round(averagePopulation).toLocaleString();
