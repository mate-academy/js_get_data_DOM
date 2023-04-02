'use strict';
// write your code here

const spanCollection = document.querySelectorAll('.population');

const total = [...spanCollection].reduce((prev, curr) => {
  return prev + +curr.textContent.split(',').join('');
}, 0);

const average = total / spanCollection.length;

const totalValue = document.querySelector('.total-population');
const avrgValue = document.querySelector('.average-population');

totalValue.textContent = total.toLocaleString();
avrgValue.textContent = average.toLocaleString();
