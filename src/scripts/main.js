'use strict';

const num = document.querySelectorAll('span.population');

const texts = [...num].map(quantity => quantity.innerText);
const numbers = texts.map(string => Number(string.split(',').join('')));

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalRes = numbers.reduce((prev, next) => {
  return prev + next;
}, 0);

const averageRes = numbers.reduce((prev, next) => {
  return prev + next;
}, 0);

total.innerText = totalRes.toLocaleString();
average.innerText = (averageRes / numbers.length).toLocaleString();
