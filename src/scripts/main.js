'use strict';

const population = document.querySelectorAll('.population');
const textData = [];

population.map(item => {
  textData.push(item.textContent);
});

let total = 0;

textData.map(item => {
  const number = item.split(',').join('');

  total += Number(number);
});

const average = total / textData.length;
const averageField = document.querySelector('.average-population');
const totalField = document.querySelector('.total-population');

totalField.textContent = total;
averageField.textContent = average;
