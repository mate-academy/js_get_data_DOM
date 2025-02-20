'use strict';

// write your code here

const population = document.querySelectorAll('.population');
const populationArr = [...population].map(num => num.innerText);

const totalPopulation = populationArr.reduce((acc, elem) => {
  return acc + Number(elem.split(',').join(''));
}, 0);

const averagePopulation = totalPopulation / populationArr.length;

const totalFormatted = totalPopulation.toLocaleString('en-US');
const averageFormatted = averagePopulation.toLocaleString('en-US');

const totalHtml = document.querySelector('.total-population');

totalHtml.innerHTML = `${totalFormatted}`;

const averageHtml = document.querySelector('.average-population');

averageHtml.innerHTML = `${averageFormatted}`;
