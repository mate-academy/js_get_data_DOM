'use strict';

// write your code here
const countriesPopulations = document.querySelectorAll('.population');

let totalPopulation = 0;
let averagePopulation = 0;
const populationList = [];
const separator = countriesPopulations[0].textContent.match(/\D/)[0] || '';

for (const countryHtml of countriesPopulations) {
  const population = Number(countryHtml.textContent.replace(/\D/g, ''));

  if (isFinite(population)) {
    populationList.push(population);

    totalPopulation = totalPopulation + population;
  }
}

averagePopulation = Math.round(totalPopulation / populationList.length);

const listAveragePopulation = String(averagePopulation).split('').reverse();
const listTotalPopulation = String(totalPopulation).split('').reverse();
const newListTotalPopulation = [];
const newListAveragePopulation = [];

for (let i = 0; i < listTotalPopulation.length; i++) {
  const num1 = listTotalPopulation[i];
  const num2 = listAveragePopulation[i];

  if (num1 || num2) {
    if ((i + 1) % 3 === 0) {
      if (listTotalPopulation[i + 1]) {
        newListTotalPopulation.push(separator + num1);
      } else {
        newListTotalPopulation.push(num1);
      }

      if (num2) {
        if (listAveragePopulation[i + 1]) {
          newListAveragePopulation.push(separator + num2);
        } else {
          newListAveragePopulation.push(num2);
        }
      }
    } else {
      newListTotalPopulation.push(num1);

      if (num2) {
        newListAveragePopulation.push(num2);
      }
    }
  }
}

const totalHtmlObj = document.querySelector('.total-population');
const averageHtmlObj = document.querySelector('.average-population');

if (newListAveragePopulation.length > 0) {
  averageHtmlObj.textContent = String(
    newListAveragePopulation.reverse().join(''),
  );
}

if (newListTotalPopulation.length > 0) {
  totalHtmlObj.textContent = String(newListTotalPopulation.reverse().join(''));
}
