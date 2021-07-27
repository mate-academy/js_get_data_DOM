'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');
const populationArr = [...population].map(a => a.innerText.replace(/,/g, ''));
const totalNumber = populationArr.reduce((sum, x) => sum + +x, 0);
const averageNumber = totalNumber / populationArr.length;

function comma(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

totalPopulation.innerText = comma(totalNumber);
averagePopulation.innerText = comma(averageNumber);
