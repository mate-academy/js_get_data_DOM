'use strict';

const items = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const amount = [...items].map(item => item.innerText);

const total = amount.reduce((acc, item) => acc + +item.split(',').join(''), 0);
const average = total / amount.length;

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
