'use strict';

const elements = [...document.querySelectorAll('.population')];

const total = elements.reduce((prev, item) => {
  return prev + Number(item.innerHTML.replaceAll(',', ''));
}, 0);

const avarage = total / elements.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = Math.round(total).toLocaleString('en-US');
averagePopulation.innerHTML = Math.round(avarage).toLocaleString('en-US');
