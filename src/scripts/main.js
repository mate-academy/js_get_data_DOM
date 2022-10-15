'use strict';

// write your code here
const span = document.querySelectorAll('.population');

const newFormat = new Intl.NumberFormat('en-Us');

const countryList = [...span]
  .map(item => +(item.innerText.split(',').join('')));

const totalPopulation = countryList
  .reduce((sum, population) => sum + population, 0);

const totalSpan = document.querySelector('.total-population');
const avarageSpan = document.querySelector('.average-population');

totalSpan.textContent = newFormat.format(totalPopulation);

avarageSpan.textContent = newFormat
  .format(totalPopulation / countryList.length);
