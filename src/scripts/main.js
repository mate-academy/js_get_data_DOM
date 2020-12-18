'use strict';

// write your code here
const populationsList = document.querySelectorAll('.population');

const populations = [...populationsList].map(value => {
  return +value.textContent.split(',').join('');
});

const total = populations.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});

const average = total / populations.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = new Intl.NumberFormat('en-Us').format(total);
averageSpan.textContent = new Intl.NumberFormat('en-Us').format(average);
