'use strict';

const populations = document.getElementsByClassName('population');
const averageText = document.getElementsByClassName('average-population');
const totalText = document.getElementsByClassName('total-population');

let totalPopulation = 0;

[...populations].forEach((elem) => {
  const populationCount = elem.textContent.split(',').join('');

  totalPopulation += +populationCount;
});

const averagePopulation = Math.round(totalPopulation / populations.length);

totalText[0].innerText = totalPopulation.toLocaleString('en-US');
averageText[0].innerText = averagePopulation.toLocaleString('en-US');
