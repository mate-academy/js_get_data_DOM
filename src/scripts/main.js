'use strict';

const population = document.querySelectorAll('.population');

const convToNum = [...population].map(el =>
  +el.textContent.split(',').join(''));

const totalPopulation = convToNum.reduce((sum, el) => sum + el, 0);

const averagePopulation = totalPopulation / convToNum.length;

const allAmount = document.querySelector('.total-population');

allAmount.innerText = totalPopulation.toLocaleString('en');

const averageAmount = document.querySelector('.average-population');

averageAmount.innerText = averagePopulation.toLocaleString('en-US');
