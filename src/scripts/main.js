'use strict';

const populationClasses = document.querySelectorAll('span.population');
const allText = Array.from(populationClasses).map((el) => el.textContent);
const textIntoNumber = allText.map((elem) => Number(elem.replaceAll(',', '')));
const totalSum = textIntoNumber.reduce((count, elem) => count + elem, 0);
const formattedSum = totalSum.toLocaleString('en-US');
const average = (totalSum / textIntoNumber.length).toLocaleString('en-US');

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

totalPopulation.textContent = formattedSum;
averagePopulation.textContent = average;
