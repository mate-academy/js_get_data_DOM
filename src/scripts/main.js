'use strict';

const populations = document.querySelectorAll('.population');
const arr = [];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const str = /\B(?=(\d{3})+(?!\d))/g;

populations.forEach(p => {
  arr.push(+p.innerText.split(',').join(''));
});

const total = arr.reduce((prev, cur) => prev + cur);
const average = total / populations.length;

totalPopulation.innerText = total.toString().replace(str, ',');
averagePopulation.innerText = average.toString().replace(str, ',');
