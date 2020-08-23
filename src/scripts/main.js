'use strict';

// write your code here
const listOfPopulation = [...document.querySelectorAll('.population')]
  .map(item => {
    return +item.innerHTML.split(',').join('');
  });

const sumOfPopulation = [...listOfPopulation]
  .reduce((sum, current) => sum + current, 0);

const avaragePopulation = sumOfPopulation / listOfPopulation.length;

document.querySelector('.total-population').innerHTML = sumOfPopulation;
document.querySelector('.average-population').innerHTML = avaragePopulation;
