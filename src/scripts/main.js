'use strict';

const spanNumber = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

spanNumber.forEach((num) => {
  total += parseInt(num.textContent);
});

const average = total / spanNumber.length;

totalPopulation.textContent = total;
averagePopulation.textContent = average.toFixed(2);
