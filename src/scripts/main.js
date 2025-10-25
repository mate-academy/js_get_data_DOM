'use strict';

const populationElements = document.querySelectorAll('.population');

const population = Array.from(populationElements).map((element) => {
  const number = Number(element.textContent.replace(/,/g, ''));

  return number;
});

const sum = population.reduce((acc, value) => acc + value, 0);
const avg = sum / population.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = sum.toLocaleString('en-US');
averageElement.textContent = Math.round(avg).toLocaleString('en-US');
