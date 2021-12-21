'use strict';

const allPopulation = document.querySelectorAll('.population');

let all = 0;

for (let i = 0; i < allPopulation.length; i++) {
  const sum = allPopulation[i].innerText.split(',').join('');

  all += +sum;
}

const average = all / allPopulation.length;

const one = document.querySelector('.total-population');

one.innerHTML = all.toLocaleString('en-EN');

const two = document.querySelector('.average-population');

two.innerHTML = average.toLocaleString('en-EN');
