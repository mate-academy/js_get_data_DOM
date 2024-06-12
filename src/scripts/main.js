'use strict';

const spanNumber = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

spanNumber.forEach((num) => {
  total += parseInt(num.textContent.replace(/,/g, ''));
});

const average = total / spanNumber.length;

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = Math.round(average).toLocaleString();
