'use strict';

// write your code here

const elements = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = elements.reduce((acc, item) => {
  return acc + +item.textContent.replaceAll(',', '');
}, 0);

totalPopulation.textContent = total.toLocaleString('en-US');

averagePopulation.textContent = (total / elements.length).toLocaleString(
  'en-US',
);
