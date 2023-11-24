'use strict';

const populations = document.querySelectorAll('.population');
const averagePopulation = document.querySelectorAll('.average-population');
const totalPopulation = document.querySelectorAll('.total-population');

const allValue = [...populations].map((value) => {
  return parseFloat(value.innerHTML.split(',').join(''));
});

const totalValue = allValue.reduce((prev, next) => prev + next);
const averageValue = totalValue / allValue.length;

averagePopulation[0].innerHTML = averageValue.toLocaleString('en-US');
totalPopulation[0].innerHTML = totalValue.toLocaleString('en-US');
