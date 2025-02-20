'use strict';

const span = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const spanArr = span.map((elem) => +elem.textContent.replace(/,/g, ''));
const total = spanArr.reduce((acum, carrent) => acum + +carrent, 0);
const average = total / spanArr.length;

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
