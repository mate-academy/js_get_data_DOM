'use strict';

// write your code here
const arr = document.querySelectorAll('.population');

const arrOfNumbers = [...arr].map(el => +(el.innerText.replace(/,/g, '')));

const totalPopulation = arrOfNumbers.reduce((first, second) => first + second);

const average = totalPopulation / arr.length;

document.querySelector('.total-population').textContent = (
  totalPopulation.toLocaleString('en'));

document.querySelector('.average-population').textContent = (
  average.toLocaleString('en'));
