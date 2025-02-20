'use strict';

const numbersPopulation = document.getElementsByClassName('population');

const newArrayOfNumbers = [...numbersPopulation].map(item => item.innerText);

const cutNumbers = newArrayOfNumbers.map(number => +number.split(',').join(''));

const totalPopulation = cutNumbers.reduce((sum, x) => sum + x);

const averagePopulation = cutNumbers.reduce((sum, x) =>
  sum + x) / cutNumbers.length;

const newFormat = new Intl.NumberFormat('en-Us');

const totalText = document.querySelectorAll('p')[0];

const replaceTextTotal = totalText.querySelector('span');

replaceTextTotal.innerHTML = newFormat.format(totalPopulation);

const averageText = document.querySelectorAll('p')[1];

const replaceTextAverage = averageText.querySelector('span');

replaceTextAverage.innerHTML = newFormat.format(averagePopulation);
