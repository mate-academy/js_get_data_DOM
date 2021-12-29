'use strict';

// write your code here
let population = document.querySelectorAll('.population');
population = [...population].map(item => item.innerText);
population = population.map(item => +item.split(',').join(''));

const totalPopulation = population.reduce((prev, item) => prev + item);
const averagePopulation = totalPopulation / population.length;

document.querySelector('.total-population').innerText = (totalPopulation).toLocaleString();
document.querySelector('.average-population').innerText = (averagePopulation).toLocaleString();
