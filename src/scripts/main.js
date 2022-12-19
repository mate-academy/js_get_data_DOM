'use strict';

const population = document.querySelectorAll('.population');
const textData = [];

population.forEach(item => {
  textData.push(item.textContent);
});

let total = 0;

textData.forEach(item => {
  const num = item.split(',').join('');

  total += Number(num);
});

const average = total / textData.length;
const averageField = document.querySelector('.average-population');
const totalField = document.querySelector('.total-population');

totalField.textContent = total.toLocaleString('en-US');
averageField.textContent = average.toLocaleString('en-US');
