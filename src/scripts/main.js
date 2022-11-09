'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const sum = [...population].map(el => parseInt(el.innerText.split(',')
  .join(''))).reduce((sumOfPeople, people) => sumOfPeople + people, 0);

total.innerText = sum.toLocaleString('en');
average.innerText = (sum / population.length).toLocaleString('en');
