'use strict';

const allData = document.querySelectorAll('span.population');
const numbers = [...allData].map(elem => {
  return +elem.innerText.split(',').join('');
});
const total = numbers.reduce((acc, next) => {
  return acc + next;
}, 0);
const average = total / numbers.length;

const totalHtml = document.querySelector('span.total-population');
const averageHtml = document.querySelector('span.average-population');

totalHtml.innerHTML = total.toLocaleString('en-US');
averageHtml.innerHTML = average.toLocaleString('en-US');
