'use strict';

// write your code here

const items = document.getElementsByClassName('population');
const population = [...items].map(item => item.innerText.split(',').join(''));
const totalPopulation = population.reduce((a, b) => a + Number(b), 0);
const averagePopulation = totalPopulation / population.length;

document.querySelector('.total-population').innerText = totalPopulation;
document.querySelector('.average-population').innerHTML = averagePopulation;
