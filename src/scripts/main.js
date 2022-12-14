'use strict';

const textData = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const numbers = [...textData].map((elem) => +elem.innerHTML.replace(/,/gi, ''));

const total = numbers.reduce(
  (accumulator, current) => accumulator + current,
  0
);

const average = total / numbers.length;

totalPopulation.textContent = total;
averagePopulation.textContent = average;
