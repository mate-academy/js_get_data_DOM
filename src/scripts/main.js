'use strict';

// write your code here
let sum = 0;
const list = [...document.querySelectorAll('.population')];

const arr = list.map(item => +item.innerText.replace(/,/g, ''));

for (const number of arr) {
  sum += number;
}

const average = sum / arr.length;

const itemTotal = document.querySelector('.total-population');
const itemAverage = document.querySelector('.average-population');

itemTotal.innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

itemAverage.innerHTML
  = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
