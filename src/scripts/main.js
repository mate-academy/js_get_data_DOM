'use strict';

const populationClass = [...document.querySelectorAll('.population')];
let total = 0;

populationClass.forEach(item => {
  total += +item.innerText.replaceAll(',', '');
});

const average = total / populationClass.length;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText
= total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

averagePopulation.innerText
= average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
