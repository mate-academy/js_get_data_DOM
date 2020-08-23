'use strict';

// write your code here
const listOfPopulation = [...document.querySelectorAll('.population')]
  .map(item => {
    return +item.innerHTML.split(',').join('');
  });

const sumOfPopulation = [...listOfPopulation]
  .reduce((sum, current) => sum + current, 0);

const avaragePopulation = sumOfPopulation / listOfPopulation.length;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

document.querySelector('.total-population').innerHTML
 = numberWithCommas(sumOfPopulation);

document.querySelector('.average-population').innerHTML
 = numberWithCommas(avaragePopulation);
