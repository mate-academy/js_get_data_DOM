'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');
let total;
let average;//

total = [...population].map(item => +item.textContent.replace(/,/g, ''));
total = total.reduce((sum, item) => sum + item);
average = total / population.length;

total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
average = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

totalPopulation.textContent = total;
averagePopulation.textContent = average;
