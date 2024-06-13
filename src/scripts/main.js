'use strict';

// write your code here
const numbers = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

numbers.forEach((number) => {
  total += parseInt(number.textContent.replace(/,/g, ''));
});

const average = total / numbers.length;

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = Math.round(average).toLocaleString();
