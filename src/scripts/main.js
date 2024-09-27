'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');
const populationArr = [];
const totalContainer = document.querySelector('.total-population');
const averageContainer = document.querySelector('.average-population');

populationElements.forEach((item, arr) => {
  populationArr.push(+item.innerText.split(',').join(''));
});

const totalPopulation = populationArr.reduce((sum, item) => sum + item, 0);
const averagePopulation = Math.round(totalPopulation / populationArr.length);

totalContainer.innerText = totalPopulation.toLocaleString();
averageContainer.innerText = averagePopulation.toLocaleString();
