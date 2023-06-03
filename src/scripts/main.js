'use strict';

const textData = document.querySelectorAll('.population');
const items = document.querySelectorAll('.list__item');
let total = 0;

textData.forEach(node => {
  const numberStr = node.textContent.replace(/,/g, '');
  const number = Number(numberStr);

  total += number;
});

const average = total / items.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString();

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = average.toLocaleString();
