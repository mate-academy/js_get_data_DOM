'use strict';

const thousandsSeparator = (number) => number.toLocaleString('en-Us');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');
const arrPopulations = [...population].map(el => el.innerText);
const arrPopToNum = arrPopulations.map(el => +el.split(',').join(''));
const len = arrPopToNum.length;
const totalPopulation = arrPopToNum.reduce((acc, el) => acc + el);
const averagePopulation = totalPopulation / len;

total.textContent = thousandsSeparator(totalPopulation);
average.textContent = thousandsSeparator(averagePopulation);
