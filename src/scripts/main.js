'use strict';

const populationClass = [...document.querySelectorAll('.population')];
let total = 0;

populationClass.forEach(item => {
  total += +item.innerText.replaceAll(',', '') || 0;
});

const average = total / populationClass.length;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent
= separator(total);

averagePopulation.textContent
= separator(average);

function separator(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
