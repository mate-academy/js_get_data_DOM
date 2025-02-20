'use strict';

// write your code here
const population = [...document.querySelectorAll('span.population')];
const numbers = population.map((e) => +e.textContent.split(',').join(''));

const totalFunc = (nums) => {
  let result = 0;

  for (const num of nums) {
    result += num;
  }

  return result;
};

const total = totalFunc(numbers).toLocaleString('en-US');
const avarage = (totalFunc(numbers) / numbers.length).toLocaleString('en-US');

document.querySelector('span.total-population').textContent = total;
document.querySelector('span.average-population').textContent = avarage;
