'use strict';

// write your code here
const populations = document.querySelectorAll('.population');
const numbersArray = [...populations].map(item => item.innerText);
let total = 0;

for (const number of numbersArray) {
  const temp = number.innerHTML.split(',').join('');

  total += +temp;
}

const average = total / numbersArray.length;

const textTotalPopulation = document.querySelectorAll('.total-population');

textTotalPopulation.textContent = total;

const textAveragePopulation = document.querySelectorAll('.average-population');

textAveragePopulation.textContent = average;
