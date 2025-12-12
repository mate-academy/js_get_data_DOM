'use strict';

const listOfPopulation = document.querySelectorAll('.population');
const totalElem = document.querySelector('.total-population');
const averageElem = document.querySelector('.average-population');
let sumOfPopulation = 0;
let averageOfPopulation = 0;

listOfPopulation.forEach((item) => {
  const value = item.textContent.replace(/,/g, '');

  sumOfPopulation += Number(value);
});

averageOfPopulation = Math.floor(sumOfPopulation / listOfPopulation.length);

totalElem.textContent = `${sumOfPopulation.toLocaleString('en-US')}`;
averageElem.textContent = `${averageOfPopulation.toLocaleString('en-US')}`;
