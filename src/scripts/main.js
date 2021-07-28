'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');
const populationArr = [...population].map(item => item.textContent.split(',').join(''));
const totalNumber = populationArr.reduce((sum, x) => sum + +x, 0);
const averageNumber = totalNumber / populationArr.length;

function separator(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

totalPopulation.innerText = separator(totalNumber);
averagePopulation.innerText = separator(averageNumber);

