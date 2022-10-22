'use strict';

const formattedData = data => data.toLocaleString('en-US');

const span = document.querySelectorAll('.population');
const totalHTML = document.querySelector('.total');
const averageHTML = document.querySelector('.average');

const population = [...span].map(number =>
  Number(number.innerText.replaceAll(',', '')));

const total = population.reduce((prevNumber, currentNumber) =>
  prevNumber + currentNumber, 0);

const average = total / population.length;

totalHTML.innerText = 'Total: ' + formattedData(total);
averageHTML.innerText = 'Average: ' + formattedData(average);
