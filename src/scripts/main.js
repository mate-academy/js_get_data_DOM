'use strict';

const elements = [...document.querySelectorAll('.population')];

const text = elements.map((el) => el.textContent);
const numbers = text
  .filter((el) => typeof el === 'number')
  .map((t) => Number(t.replaceAll(',', '')));

const sum = numbers.reduce((acc, num) => acc + num);
const average = (sum / numbers.length).toLocaleString('en-US');
const formattedSum = sum.toLocaleString('en-US');

const totalPopulationElement = document.querySelector('.total-population');
const avaregePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = formattedSum;
avaregePopulationElement.textContent = average;
