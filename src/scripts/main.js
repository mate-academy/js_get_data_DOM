'use strict';

const listPopulation = document.querySelectorAll('.population');
const arrayPopulation = [...listPopulation].map(
  item => Number(item.innerText.replace(/,/g, ''))
);
const totalAmount = arrayPopulation.reduce((sum, current) => sum + current, 0);
const totalElement = document.querySelector('.total-population');

totalElement.innerText = totalAmount.toLocaleString('en-EN');

const average = totalAmount / arrayPopulation.length;
const averageResult = average.toLocaleString('en-EN');
const averageElement = document.querySelector('.average-population');

averageElement.innerText = averageResult;
