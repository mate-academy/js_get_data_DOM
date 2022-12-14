'use strict';

// write your code here

const items = document.getElementsByClassName('population');
const population = [...items].map(item => item.innerText.split(',').join(''));
let totalPopulation = population.reduce((a, b) => a + Number(b), 0);
let averagePopulation = totalPopulation / population.length;

totalPopulation = String(totalPopulation)
  .replace(/(?=(\d\d\d)+([^\d]|$))/g, ',');

averagePopulation = String(averagePopulation)
  .replace(/(?=(\d\d\d)+([^\d]|$))/g, ',').slice(1);

document.querySelector('.total-population').innerText = totalPopulation;
document.querySelector('.average-population').innerHTML = averagePopulation;
