'use strict';

const textData = document.querySelectorAll('.population');
const textDataArray = Array.from(textData);
const items = document.querySelectorAll('.list__item');

const total = textDataArray.reduce((sum, node) => {
  const numberStr = node.textContent.replace(/,/g, '');
  const number = Number(numberStr);

  return sum + number;
}, 0);

const average = total / items.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString().split(',').join(' ');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = average.toLocaleString().split(',').join(' ');
