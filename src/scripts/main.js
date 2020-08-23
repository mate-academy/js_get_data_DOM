'use strict';

const items = document.querySelectorAll('.population');

const populations = [...items].map(item => +item.innerText.split(',').join(''));

const totalPopulationValue = populations.reduce((a, b) => a + b);
const averagePopulationValue = totalPopulationValue / populations.length;

const totalPopulationItem = document.querySelector('.total-population');
const averagePopulationItem = document.querySelector('.average-population');

totalPopulationItem.innerText = new Intl.NumberFormat()
  .format(totalPopulationValue);

averagePopulationItem.innerText = new Intl.NumberFormat()
  .format(averagePopulationValue);
