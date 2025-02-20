'use strict';

const listItems = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const values = [...listItems].map(el => +el.textContent.replace(/,/g, ''));

const totalPopulation = values.reduce((prev, cur) => prev + cur, 0);
const averagePopulation = totalPopulation / listItems.length;

total.textContent = totalPopulation.toLocaleString('En-us');
average.textContent = averagePopulation.toLocaleString('En-us');
