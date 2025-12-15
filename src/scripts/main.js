'use strict';

const allSpan = document.querySelectorAll('span.population');
let allPopulation = 0;
let countCountry = 0;

allSpan.forEach((span) => {
  const numberPopulation = Number(span.textContent.replace(/,/g, ''));

   if (!isNaN(numberPopulation)) {
    allPopulation += numberPopulation;
    countCountry++;
  }
});

const averagePopulation = allPopulation / countCountry;
const totalSuma = document.querySelector('span.total-population');
const averageSuma = document.querySelector('span.average-population');

totalSuma.textContent = allPopulation.toLocaleString('en-US');
averageSuma.textContent = averagePopulation.toLocaleString('en-US');
