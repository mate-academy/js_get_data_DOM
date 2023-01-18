'use strict';

const population = document.querySelectorAll('.population');

const allArrInOne = [...population].map(el => el.textContent);

const convToNum = allArrInOne.map(el => +el.split(',').join(''));

const totalPopulation = convToNum.reduce((sum, el) => sum + el, 0);

const averagePopulation = totalPopulation / allArrInOne.length;

const allAmount = document.querySelector('.total-population');

allAmount.innerText = totalPopulation.toLocaleString('en-US');

const averageAmount = document.querySelector('.average-population');

averageAmount.innerText = averagePopulation.toLocaleString('en-US');
