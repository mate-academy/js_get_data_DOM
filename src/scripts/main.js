'use strict';

const htmlItems = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationList = htmlItems.map(item =>
  +item.textContent.replace(/[^+\d]/g, '')
);

const totalPopulation = populationList.reduce((acc, item) => acc + item);
const averageCountPopulation = totalPopulation / populationList.length;

total.textContent = numberWithCommas(totalPopulation);
average.textContent = numberWithCommas(averageCountPopulation);

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
