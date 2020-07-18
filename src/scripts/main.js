'use strict';

// write your code here
const populations = document.getElementsByClassName('population');

let totalPopulation = 0;

for (let i = 0; i < populations.length; i++) {
  totalPopulation += parseInt(populations[i].innerHTML.split(',').join(''));
}

const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population')
  .innerHTML = totalPopulation;

document.querySelector('.average-population')
  .innerHTML = averagePopulation;
