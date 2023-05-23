'use strict';

// write your code here
const spanNumbers = document.getElementsByClassName('population');

const total = [...spanNumbers].reduce(
  (acc, item) => acc + (+item.innerText.replace(/,/g, '')), 0
);

const average = total / [...spanNumbers].length;

const totalAmount = document.querySelector('.total-population');

totalAmount.innerText = total.toLocaleString('en-US');

const averageAmount = document.querySelector('.average-population');

averageAmount.innerText = average.toLocaleString('en-US');
