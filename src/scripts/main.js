'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const data = [...population].map(item => +item.innerHTML.split(',').join(''));
const total = data.reduce((acc, el) => acc + el, 0);

totalPopulation.innerHTML = total.toLocaleString('en');
averagePopulation.innerHTML = (total / data.length).toLocaleString('en');
